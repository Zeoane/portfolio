export interface Project {
  /** Schlüssel für die Texte in public/i18n (projects.<key>.…) */
  key: string;
  name: string;
  /** Skill-Icons aus public/icons/skills (gleiche Namen wie in skills.ts) */
  technologies: string[];
  /** Pfad zum Screenshot in public/img, leer solange noch keiner da ist */
  screenshot: string;
  liveUrl: string;
  githubUrl: string;
}

/** Reihenfolge der Tabs: DABubble, Join, Code à la Cuisine, El Pollo Loco */
export const PROJECTS: Project[] = [
  {
    key: 'dabubble',
    name: 'DABubble',
    technologies: ['angular', 'typescript', 'html', 'css'],
    screenshot: '',
    liveUrl: 'https://dabubble.gabriele-lerch.dev',
    githubUrl: 'https://github.com/Zeoane',
  },
  {
    key: 'join',
    name: 'Join',
    technologies: ['javascript', 'html', 'css', 'rest-api'],
    screenshot: 'img/project-join.webp',
    liveUrl: 'https://join.gabriele-lerch.dev',
    githubUrl: 'https://github.com/Zeoane/Join-Issue-Collector',
  },
  {
    key: 'cuisine',
    name: 'Code à la Cuisine',
    technologies: ['angular', 'typescript', 'rest-api'],
    screenshot: 'img/project-cuisine.webp',
    liveUrl: 'https://cuisine.gabriele-lerch.dev',
    githubUrl: 'https://github.com/Zeoane/Code-Cuisine',
  },
  {
    key: 'pollo',
    name: 'El Pollo Loco',
    technologies: ['javascript', 'html', 'css'],
    screenshot: '',
    liveUrl: 'https://pollo-loco.gabriele-lerch.dev',
    githubUrl: 'https://github.com/Zeoane',
  },
];
