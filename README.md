# Pablo Fotografie — Homepage

Projekt für die Homepage eines angehenden Fotografen. Enthält 3 Layout-Vorschläge
als Diskussionsgrundlage sowie die Ordnerstruktur für Assets.

## Vorschau

`index.html` öffnen — dort sind alle 3 Layouts verlinkt und kurz beschrieben:

1. **Minimal Editorial** (`layouts/01-minimal-editorial.html`) — ruhig, viel
   Weissraum, serifenbetonte Typografie, magazinartig.
2. **Bold Portfolio** (`layouts/02-bold-portfolio.html`) — Dark Mode,
   Masonry-Galerie als Hauptelement, kräftige Akzentfarbe.
3. **Classic Elegant** (`layouts/03-classic-elegant.html`) — Sidebar-Navigation,
   warme Erdtöne, Studio-Charakter mit Testimonial und Kontaktformular.

Alle drei Dateien sind eigenständig (HTML + CSS inline, keine Build-Tools nötig)
und lassen sich direkt im Browser öffnen. Texte und Bilder sind aktuell
Platzhalter — Layouts sind bewusst so gebaut, dass sich Platzhalter-Blöcke
(`.ph` / `.swatch`) 1:1 durch echte Fotos ersetzen lassen (Hintergrundbild
statt Gradient).

## Ordnerstruktur

```
pablo-hp/
├── index.html                     Übersicht/Vergleich der 3 Vorschläge
├── layouts/                       die 3 eigenständigen Layout-Vorschläge
│   ├── 01-minimal-editorial.html
│   ├── 02-bold-portfolio.html
│   └── 03-classic-elegant.html
└── assets/
    └── images/
        ├── hero/                  Hero-/Titelbilder
        ├── portraets/             Porträt-Shootings
        ├── hochzeiten/            Hochzeitsfotos
        ├── events/                Event-Fotografie
        ├── landschaft/            Landschaftsaufnahmen
        ├── street/                Street Photography
        ├── about/                 Bilder für "Über mich" (Porträt des Fotografen)
        └── logo/                  Logo/Wortmarke, Favicon
```

Dieselbe Struktur eignet sich auch für OneDrive, um Rohdateien (RAW/volle
Auflösung) abzulegen — der `assets/images`-Ordner hier im Projekt ist dann
für die web-optimierten (komprimierten) Versionen gedacht, die tatsächlich
auf der Homepage verwendet werden.

## Nächste Schritte

- Einen der 3 Vorschläge auswählen (oder Elemente mischen)
- Finale Texte (Name, Über-mich-Text, Kategorien, Kontaktdaten) liefern
- Fotos in `assets/images/...` einsortieren
- Platzhalter (`data-label`-Blöcke) durch echte `background-image`s ersetzen
