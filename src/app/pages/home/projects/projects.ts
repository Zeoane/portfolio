import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PROJECTS } from '../../../data/projects';
import { SKILLS } from '../../../data/skills';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly activeIndex = signal(0);
  protected readonly active = computed(() => this.projects[this.activeIndex()]);

  /** Anzeigename einer Technologie, z. B. "typescript" -> "TypeScript" */
  protected techName(icon: string): string {
    return SKILLS.find((skill) => skill.icon === icon)?.name ?? icon;
  }

  protected techList(icons: string[]): string {
    return icons.map((icon) => this.techName(icon)).join(', ');
  }

  protected select(index: number): void {
    this.activeIndex.set(index);
  }

  /** Pfeiltasten wechseln zwischen den Tabs (Barrierefreiheit) */
  protected onTabKey(event: KeyboardEvent): void {
    const count = this.projects.length;
    let next = this.activeIndex();
    if (event.key === 'ArrowRight') next = (next + 1) % count;
    else if (event.key === 'ArrowLeft') next = (next - 1 + count) % count;
    else return;
    event.preventDefault();
    this.select(next);
    document.getElementById(`project-tab-${next}`)?.focus();
  }
}
