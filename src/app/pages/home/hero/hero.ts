import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Header } from '../../../shared/header/header';
import { Logo } from '../../../shared/logo/logo';
import { SocialLinks } from '../../../shared/social-links/social-links';

/** Startbereich: genau eine Bildschirmhöhe (100vh) inklusive Menüleiste. */
@Component({
  selector: 'app-hero',
  imports: [TranslatePipe, Header, Logo, SocialLinks],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
