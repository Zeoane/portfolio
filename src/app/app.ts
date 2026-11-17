import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Wird hier geladen, damit die gespeicherte Sprache sofort beim Start gilt.
  private language = inject(LanguageService);
}
