import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LEARNING, SKILLS } from '../../../data/skills';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly skills = SKILLS;
  protected readonly learning = LEARNING;
}
