import { Component, inject, isDevMode, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LINKS } from '../../../data/links';

type SendState = 'idle' | 'sending' | 'success' | 'error';

/** E-Mail mit Punkt in der Domain (Validators.email würde auch "a@b" erlauben) */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly http = inject(HttpClient);
  protected readonly links = LINKS;
  protected readonly state = signal<SendState>('idle');

  // Der Senden-Button reagiert sofort auf jede Eingabe.
  // Fehlermeldungen erscheinen aber erst, wenn ein Feld verlassen wurde (onBlur, siehe showError).
  protected readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, Validators.requiredTrue],
  });

  /** "touched" wird beim Verlassen des Feldes (blur) gesetzt */
  protected showError(field: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[field];
    return control.invalid && control.touched;
  }

  /** Figma "done": Haken im Feld, wenn die Eingabe gültig ist */
  protected isDone(field: 'name' | 'email' | 'message'): boolean {
    const control = this.form.controls[field];
    return control.valid && control.touched;
  }

  protected submit(): void {
    if (this.form.invalid || this.state() === 'sending') {
      this.form.markAllAsTouched();
      return;
    }
    this.state.set('sending');

    // Im lokalen Entwicklungsserver gibt es kein Netlify. Dort wird der Versand nur simuliert.
    if (isDevMode()) {
      console.info('[Kontakt] Testmodus, nichts gesendet:', this.form.getRawValue());
      setTimeout(() => this.finish(true), 600);
      return;
    }

    const { name, email, message } = this.form.getRawValue();
    const body = new URLSearchParams({ 'form-name': 'contact', name, email, message, privacy: 'ja' }).toString();
    this.http
      .post('/', body, {
        headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
        responseType: 'text',
      })
      .subscribe({ next: () => this.finish(true), error: () => this.finish(false) });
  }

  private finish(success: boolean): void {
    this.state.set(success ? 'success' : 'error');
    if (success) this.form.reset();
    setTimeout(() => this.state.set('idle'), 6000);
  }
}
