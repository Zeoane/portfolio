import { Component, input } from '@angular/core';

/** Logo aus der Figma-Vorlage: Code-Icon mit Name und "developer". */
@Component({
  selector: 'app-logo',
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
  host: { '[class.dark]': "variant() === 'dark'", '[class.compact]': 'compact()' },
})
export class Logo {
  /** light = auf dunklem Hintergrund, dark = auf blauem Hintergrund */
  readonly variant = input<'light' | 'dark'>('light');
  /** Kleinere Schrift (14px), z. B. in der mobilen Kopfzeile */
  readonly compact = input(false);
}
