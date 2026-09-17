# photography-p — Homepage

Projekt für die Homepage von **photography-p**, einem angehenden Fotografen.
Enthält 3 Layout-Vorschläge als Diskussionsgrundlage sowie die Ordnerstruktur
für Assets.

## Vorschau

`index.html` öffnen — dort sind alle Vorschläge verlinkt und kurz beschrieben.

**Layout-Vorschläge** (Schritt 1, zur Stilfindung):

1. **Minimal Editorial** (`layouts/01-minimal-editorial.html`) — ruhig, viel
   Weissraum, serifenbetonte Typografie, magazinartig.
2. **Bold Portfolio** (`layouts/02-bold-portfolio.html`) — Dark Mode,
   Masonry-Galerie als Hauptelement, kräftige Akzentfarbe.
3. **Classic Elegant** (`layouts/03-classic-elegant.html`) — Sidebar-Navigation,
   warme Erdtöne, Studio-Charakter mit Testimonial und Kontaktformular.
   → **gewählt**, wird weiterentwickelt.

**Farb- & Schriftvorschläge auf Basis von Vorschlag 3** (Schritt 2), mit
erweiterter Seitenstruktur — Titelseite (Drohnenvideo-Hero), Über mich,
Portfolio, Positionierung, Blog, Kontakt:

- **A · Warme Nähe** (`layouts/v3a-warme-naehe.html`) — Creme/Espresso-Braun,
  Akzent Terrakotta. Schrift: *Fraunces* (Headlines) + *Inter* (Fliesstext).
  Wirkt persönlich, warm, vertrauensbildend.
- **B · Cinematic Frame** (`layouts/v3b-cinematic-frame.html`) — dunkle
  Sidebar als "Filmrahmen" um hellen Content, Akzent Messing/Bronze.
  Schrift: *Cormorant Garamond* (kursiv für Headlines/Zitate) + *Space
  Grotesk* für Navigation/Labels. Wirkt cinematisch, technisch, hochwertig.
- **C · Ruhiger Fluss** (`layouts/v3c-ruhiger-fluss.html`) — Nebelgrau/
  Blaugrau, Akzent gedämpftes Salbeigrün. Schrift durchgängig *Manrope*.
  Wirkt ruhig, minimal, technisch sauber.

Jede der drei Varianten enthält bereits einen **Beispiel-Blogartikel**
(`*-blogartikel.html`), verlinkt aus der Blog-Sektion der jeweiligen Startseite.
Ein kleines schwarzes Badge unten rechts markiert auf jeder Seite, welcher
Vorschlag gerade angezeigt wird (nur zur Orientierung während der
Auswahlphase, wird vor dem Launch entfernt).

Alle Dateien sind eigenständig (HTML + CSS inline, keine Build-Tools nötig)
und lassen sich direkt im Browser öffnen. Texte sind aktuell Platzhalter
(insbesondere „Über mich" und „Positionierung" — Angebot/Stärken werden noch
final getextet). Die Bilder in `assets/images/` sind **generierte
Beispielgrafiken** (abstrakte Kompositionen je Kategorie, keine echten
Fotos), damit die Layouts nicht mit grauen Flächen wirken, sondern
realistischer eingeschätzt werden können. Jedes Bild wird per
`background-image` eingebunden (`.ph`-Blöcke) — sobald echte Fotos vorliegen,
einfach die Datei am gleichen Pfad ersetzen, der Rest funktioniert automatisch
weiter.

### Drohnenvideo (Titelseite)

Die Hero-Sektion der `v3*`-Varianten ist als Video-Hintergrund gebaut:
`<video>` lädt `assets/video/drone-intro.mp4` und zeigt bis dahin (und falls
die Datei fehlt) automatisch das Bild `assets/images/hero/hero-01.jpg` als
Standbild-Ersatz — die Seite funktioniert also schon jetzt, ohne dass ein
Video vorhanden ist. Sobald das Drohnenvideo bereitsteht, einfach als
`drone-intro.mp4` in `assets/video/` ablegen (empfohlen: kurze Loop, 10–20s,
stumm/ohne Ton, komprimiert für Web — H.264/MP4).

## Ordnerstruktur

```
pablo-hp/
├── index.html                          Übersicht/Vergleich aller Vorschläge
├── layouts/
│   ├── 01-minimal-editorial.html       Layout-Vorschlag 1
│   ├── 02-bold-portfolio.html          Layout-Vorschlag 2
│   ├── 03-classic-elegant.html         Layout-Vorschlag 3 (gewählt)
│   ├── v3a-warme-naehe.html            Farb-/Schriftvariante A (auf Basis 3)
│   ├── v3a-warme-naehe-blogartikel.html    Beispiel-Blogartikel zu A
│   ├── v3b-cinematic-frame.html        Farb-/Schriftvariante B (auf Basis 3)
│   ├── v3b-cinematic-frame-blogartikel.html Beispiel-Blogartikel zu B
│   ├── v3c-ruhiger-fluss.html          Farb-/Schriftvariante C (auf Basis 3)
│   └── v3c-ruhiger-fluss-blogartikel.html   Beispiel-Blogartikel zu C
└── assets/
    ├── images/
    │   ├── hero/                  Hero-/Titelbilder
    │   ├── portraets/             Porträt-Shootings
    │   ├── hochzeiten/            Hochzeitsfotos
    │   ├── events/                Event-Fotografie
    │   ├── landschaft/            Landschaftsaufnahmen
    │   ├── street/                Street Photography
    │   ├── about/                 Bilder für "Über mich" (Porträt des Fotografen)
    │   └── logo/                  Logo/Wortmarke, Favicon
    └── video/                     Drohnenvideo für die Titelseite (drone-intro.mp4)
```

Dieselbe Struktur eignet sich auch für OneDrive, um Rohdateien (RAW/volle
Auflösung) abzulegen — der `assets/images`-Ordner hier im Projekt ist dann
für die web-optimierten (komprimierten) Versionen gedacht, die tatsächlich
auf der Homepage verwendet werden.

## Nächste Schritte

- Eine der 3 Farb-/Schriftvarianten (A/B/C) auswählen (oder Elemente mischen)
- Finale Texte liefern (Über mich, Positionierung: Angebot &amp; Stärken,
  Kontaktdaten, echte Blogartikel)
- Drohnenvideo als `assets/video/drone-intro.mp4` ablegen
- Echte Fotos in `assets/images/...` einsortieren (gleiche Dateinamen wie die
  aktuellen Beispielbilder verwenden, dann muss im HTML nichts angepasst werden)
- Dev-Badge (Vorschlag-Kennzeichnung unten rechts) aus der gewählten Version
  entfernen
