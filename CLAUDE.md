# picture-p — Projektkonventionen

Portfolio-Website für Fotograf Pablo Bieri (Business: "picture-p").
Statisches HTML/CSS/vanilla-JS, kein Build-Tool. Deployment via GitHub
Pages (Push auf `main` → `.github/workflows/pages.yml`).

**Kanonische Live-Seite:** `layouts/v3-herbstwaerme-navy.html`
Live-URL: https://nicopeterwinterthur-create.github.io/pablo-hp/layouts/v3-herbstwaerme-navy.html

## Design-Routine: einheitlicher "Frame"-Look

Für alle Bild-/Medienkacheln auf der Seite (Hero-Slideshow, Portfolio-
Karten, Blog-Karten, Testimonial-Karten und jede künftige ähnliche
Komponente) gilt derselbe visuelle Rahmen, damit die Seite wie aus
einem Guss wirkt:

```css
.card-frame{
  background:#fff;padding:10px;border-radius:8px;margin-bottom:16px;
  box-shadow:0 30px 55px -24px rgba(22,15,10,.32),0 10px 24px -8px rgba(22,15,10,.16);
}
```

- Bild/Video sitzt in einem weissen Passepartout (`.card-frame`) mit
  weichem Schatten — kein Bild liegt direkt auf dem Sektionshintergrund.
- Bildformat innerhalb des Frames: `aspect-ratio:4/5` (Hochformat),
  `border-radius:4px`, `overflow:hidden`.
- Grid-Container (`.cards`, `.blog-grid` o.ä.) bekommt `max-width` (aktuell
  980px) + `margin:0 auto`, damit Kacheln nicht über die volle Breite
  gestreckt werden, sondern kompakt und zentriert wirken.
- Die grössere Hero-Slideshow (`.hero-frame`) nutzt dieselbe Idee in
  grösserem Massstab (mehr Padding, etwas stärkerer Schatten) als
  visueller Ankerpunkt.
- Dieses Muster neu anlegen, nicht neu erfinden: bei jeder neuen
  Bild-/Medien-Sektion (weitere Portfolio-Kategorien, neue Blogposts,
  neue Testimonial-Quellen etc.) den bestehenden `.card-frame`-Stil
  wiederverwenden statt einen eigenen Look zu entwerfen.

## Design-Routine: Header auf Unterseiten

Jede eigenständige Unterseite (Blogartikel, Blog-Übersicht, Impressum,
Datenschutz und jede künftige ähnliche Seite) nutzt denselben Header
wie die Sidebar-Brand auf der Hauptseite, verlinkt auf die Startseite:

```html
<div class="top">
  <a class="brand" href="v3-herbstwaerme-navy.html">
    <span class="owner">Pablo Bieri</span>
    <span class="brand-name">picture-p</span>
    <span class="tagline">Foto- &amp; Videografie</span>
  </a>
  <a class="back" href="v3-herbstwaerme-navy.html">← Zurück zur Startseite</a>
</div>
```

```css
.top .brand{display:flex;flex-direction:column;text-decoration:none;transition:transform .3s ease;transform-origin:left center;}
.top .brand:hover{transform:scale(1.03);}
.top .brand .owner{display:block;font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:600;font-size:18px;line-height:1.2;color:var(--rost);}
.top .brand .brand-name{display:block;font-size:24px;line-height:1.05;font-weight:500;letter-spacing:.01em;margin-top:1px;color:var(--navy);font-family:'Space Grotesk',sans-serif;transition:color .3s ease;}
.top .brand:hover .brand-name{color:var(--rost);}
.top .brand .tagline{display:block;font-family:'Inter',sans-serif;font-size:9.5px;letter-spacing:.03em;text-transform:uppercase;color:var(--muted);margin-top:2px;font-weight:400;}
```

- Nicht die abgekürzte einzeilige `picture-p`-Variante neu einführen —
  immer das volle dreizeilige Brand-Block (Name/Produktname/Tagline).
- Der Brand-Block selbst ist ein Link zur Startseite; der zusätzliche
  "← Zurück zur Startseite"-Link bleibt rechts daneben bestehen.

## Weitere Konventionen

- Farbpalette "Herbstwärme": `--cream`, `--panel`, `--rost`, `--ocker`,
  `--kastanie`, `--line`, `--navy`, `--ink`, `--muted` (siehe `:root`
  in der Haupt-HTML-Datei).
- Jede grössere Sektion bekommt einen dezenten, halbtransparenten
  Farbton (niedrige Deckkraft, z. B. `rgba(179,113,79,.05)`) zur
  Unterscheidung — nie eine voll deckende Hintergrundfarbe, damit die
  seitenweite Architektur-Relief-Textur (`body::before`) überall
  sichtbar bleibt.
- Bilder: Responsive WebP-Paar pro Motiv (`name-mobile.webp` /
  `name.webp`, Swap ab 980px Breite), Master-JPEG bleibt im selben
  Ordner erhalten. Hero-Bilder zusätzlich mit `-full`/`-full-bw`-
  Varianten für die Lightbox.
- Commits und PR-Texte auf Deutsch, im bisherigen Stil (kurzer Titel +
  Stichpunkte, was/warum).
