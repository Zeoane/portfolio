import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Header } from '../../shared/header/header';
import { LanguageService } from '../../language.service';
import { LINKS } from '../../data/links';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink, TranslatePipe, Header],
  templateUrl: './privacy-policy.html',
  styleUrl: '../legal-page.scss',
})
export class PrivacyPolicy {
  protected readonly language = inject(LanguageService);
  protected readonly links = LINKS;
}
