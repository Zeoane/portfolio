import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Lang = 'de' | 'en';
const STORAGE_KEY = 'portfolio-lang';

/** Merkt sich die gewählte Sprache und schaltet zwischen Deutsch und Englisch um. */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);
  readonly current = signal<Lang>(this.initialLang());

  constructor() {
    this.apply(this.current());
  }

  set(lang: Lang): void {
    this.current.set(lang);
    this.apply(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Speichern nicht möglich (z. B. privater Modus): Sprache gilt dann nur für diesen Besuch.
    }
  }

  private apply(lang: Lang): void {
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  private initialLang(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'de' || saved === 'en') return saved;
    } catch {}
    return navigator.language.startsWith('de') ? 'de' : 'en';
  }
}
