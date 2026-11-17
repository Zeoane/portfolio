/**
 * Schalter für den Bereich "Kollegenstimmen".
 * false = Bereich wird nicht angezeigt. Auf true setzen, sobald echte Stimmen vorliegen
 * (Namen und Zitate in public/i18n/de.json und en.json unter "references" eintragen).
 */
export const SHOW_REFERENCES = false;

export interface Reference {
  /** Schlüssel für Name und Zitat in public/i18n (references.<key>.…) */
  key: string;
  /** Projekt, in dem ihr zusammengearbeitet habt */
  project: string;
  /** LinkedIn-Profil der Person. Leer lassen, dann wird kein Link angezeigt. */
  linkedinUrl: string;
}

/** Stimmen aus den Teamprojekten. Namen und Zitate stehen in de.json / en.json. */
export const REFERENCES: Reference[] = [
  { key: 'r1', project: 'DABubble', linkedinUrl: '' },
  { key: 'r2', project: 'Join', linkedinUrl: '' },
  { key: 'r3', project: 'Code à la Cuisine', linkedinUrl: '' },
];
