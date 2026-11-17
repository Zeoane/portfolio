import { Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { LINKS } from '../../data/links';

/** E-Mail, GitHub und LinkedIn als runde Icons. */
@Component({
  selector: 'app-social-links',
  imports: [NgTemplateOutlet, TranslatePipe],
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
  host: { '[class.vertical]': 'vertical()', '[class.dark]': "variant() === 'dark'" },
})
export class SocialLinks {
  readonly vertical = input(false);
  readonly variant = input<'light' | 'dark'>('light');
  /** Reihenfolge im Hero: E-Mail, GitHub, LinkedIn. Im Footer: GitHub, E-Mail, LinkedIn. */
  readonly order = input<'hero' | 'footer'>('hero');
  protected readonly links = LINKS;

  protected icon(name: string): string {
    return this.variant() === 'dark' ? `icons/${name}-dark.svg` : `icons/${name}.svg`;
  }
}
