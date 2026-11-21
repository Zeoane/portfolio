export interface Project {
  /** Schlüssel für die Texte in public/i18n (projects.<key>.…) */
  key: string;
  name: string;
  /** Skill-Icons aus public/icons/skills (gleiche Namen wie in skills.ts) */
  technologies: string[];
  /** Pfad zum Screenshot in public/img, leer solange noch keiner da ist */
  screenshot: string;
  /** Leer lassen, solange es noch keinen Live-Test gibt. Dann wird kein Button angezeigt. */
  liveUrl: string;
  /** Leer lassen, solange das Repository noch nicht öffentlich ist. */
  githubUrl: string;
  /** false = Projekt wird nicht angezeigt (zum Ausblenden, ohne etwas zu löschen) */
  show: boolean;
  /** true = aktuelles Projekt, an dem noch gearbeitet wird */
  ongoing?: boolean;
}

/**
 * Alle Projekte in der Reihenfolge der Tabs.
 * Ein- und ausblenden über "show". Die Nummern der Tabs passen sich automatisch an.
 */
export const ALL_PROJECTS: Project[] = [
  {
    key: 'dabubble',
    name: 'DABubble',
    technologies: ['angular', 'typescript', 'html', 'css'],
    screenshot: 'img/project-dabubble.webp',
    liveUrl: 'https://dabubble.gabriele-lerch.dev',
    githubUrl: 'https://github.com/Zeoane/DABubble',
    show: true,
  },
  {
    key: 'join',
    name: 'Join',
    technologies: ['javascript', 'html', 'css', 'rest-api'],
    screenshot: 'img/project-join.webp',
    liveUrl: 'https://join.gabriele-lerch.dev',
    githubUrl: 'https://github.com/Zeoane/Join-Issue-Collector',
    show: true,
  },
  {
    key: 'cuisine',
    name: 'Code à la Cuisine',
    technologies: ['angular', 'typescript', 'rest-api'],
    screenshot: 'img/project-cuisine.webp',
    liveUrl: 'https://cuisine.gabriele-lerch.dev',
    githubUrl: 'https://github.com/Zeoane/Code-Cuisine',
    // Noch offen, ob es im Portfolio bleibt. Zum Ausblenden auf false setzen.
    show: true,
  },
  {
    key: 'pollo',
    name: 'El Pollo Loco',
    technologies: ['javascript', 'html', 'css'],
    screenshot: 'img/project-pollo-loco.webp',
    liveUrl: 'https://pollo-loco.gabriele-lerch.dev',
    githubUrl: 'https://github.com/Zeoane/el-pollo-loco',
    show: true,
  },
  {
    key: 'kanmind',
    name: 'KanMind',
    technologies: ['python', 'django', 'drf', 'rest-api'],
    screenshot: 'img/project-kanmind.webp',
    // Backend-Projekt, das Frontend kommt von der Developer Akademie. Links eintragen, sobald vorhanden.
    liveUrl: '',
    githubUrl: '',
    show: true,
    ongoing: true,
  },
];

/** Nur die sichtbaren Projekte */
export const PROJECTS: Project[] = ALL_PROJECTS.filter((project) => project.show);
