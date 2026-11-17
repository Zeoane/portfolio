import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { REFERENCES } from '../../../data/references';

@Component({
  selector: 'app-references',
  imports: [TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  protected readonly references = REFERENCES;
}
