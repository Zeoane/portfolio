export interface Skill {
  name: string;
  icon: string;
}

/** Reihenfolge wie in der Figma-Vorlage. Icons liegen in public/icons/skills. */
export const SKILLS: Skill[] = [
  { name: 'Angular', icon: 'angular' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'REST-API', icon: 'rest-api' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'Git', icon: 'git' },
  { name: 'Material Design', icon: 'material-design' },
  { name: 'Scrum', icon: 'scrum' },
];
