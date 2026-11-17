import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { WhyMe } from './why-me/why-me';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { References } from './references/references';
import { Contact } from './contact/contact';
import { SHOW_REFERENCES } from '../../data/references';

@Component({
  selector: 'app-home',
  imports: [Hero, WhyMe, Skills, Projects, References, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly showReferences = SHOW_REFERENCES;
}
