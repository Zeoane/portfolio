# Portfolio – Gabriele Lerch

Persönliche Portfolio-Website als Frontend-Entwicklerin (Projektabgabe Developer Akademie).
Live: https://gabriele-lerch.dev

## Technik

- Angular 22 (Standalone-Komponenten, SCSS)
- Mehrsprachig Deutsch/Englisch mit ngx-translate, Texte in `public/i18n/`
- Schriften Anta und Josefin Sans lokal eingebunden (keine Google-Server)
- Hosting auf Netlify, Konfiguration in `netlify.toml`

## Lokal starten

```bash
npm install
npm start
```

Dann http://localhost:4200 öffnen.

## Struktur

```
src/
  styles/_tokens.scss     Farben, Schriften und Breakpoints aus Figma
  app/
    language.service.ts   Sprachumschaltung DE/EN (wird gespeichert)
    shared/               Header und Footer
    pages/                Startseite, Impressum, Datenschutz
public/
  i18n/de.json, en.json   Alle Texte der Seite
```
