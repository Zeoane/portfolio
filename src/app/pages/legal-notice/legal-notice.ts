import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Header } from '../../shared/header/header';
import { LanguageService } from '../../language.service';
import { LINKS } from '../../data/links';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink, TranslatePipe, Header],
  templateUrl: './legal-notice.html',
  styleUrl: '../legal-page.scss',
})
export class LegalNotice {
  protected readonly language = inject(LanguageService);
  protected readonly links = LINKS;
}
