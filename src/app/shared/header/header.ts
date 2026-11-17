import { Component, inject, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../language.service';
import { Logo } from '../logo/logo';

/**
 * Menüleiste.
 * Desktop: blaue Leiste mit Logo, Navigation und DE/EN-Schalter (auf der Startseite unten im Hero).
 * Mobile: Logo und Burger-Button oben, Menü als blaue Blase.
 */
@Component({
  selector: 'app-header',
  imports: [NgTemplateOutlet, RouterLink, TranslatePipe, Logo],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly language = inject(LanguageService);
  protected readonly menuOpen = signal(false);

  protected readonly navItems = [
    { fragment: 'why-me', label: 'nav.whyMe' },
    { fragment: 'skills', label: 'nav.skills' },
    { fragment: 'projects', label: 'nav.projects' },
    { fragment: 'contact', label: 'nav.contact' },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
