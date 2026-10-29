# picture-p — Projektkonventionen

Portfolio-Website für Fotograf Pablo Bieri (Business: "picture-p").
Statisches HTML/CSS/vanilla-JS, kein Build-Tool. Deployment via GitHub
Pages (Push auf `main` → `.github/workflows/pages.yml`).

**Kanonische Live-Seite:** `/index.html` (Repo-Wurzel)
Live-URL: https://nicopeterwinterthur-create.github.io/pablo-hp/
(sobald eine eigene Domain eingerichtet ist: alle `nicopeterwinterthur-create.github.io/pablo-hp/`-Referenzen — Canonical-Tags, OG-URLs, JSON-LD, `sitemap.xml`, `robots.txt` — auf die neue Domain aktualisieren)

## Seitenstruktur

- `/index.html` — die eigentliche Startseite (liegt bewusst an der
  Wurzel, nicht unter `/layouts/`, für eine saubere Root-URL/SEO).
  Referenziert Assets über relative Pfade ohne `../` (z. B.
  `assets/images/...`, `layouts/datenschutz.html`).
- `/layouts/v3-herbstwaerme-navy.html` — alte URL der Startseite,
  jetzt nur noch ein Redirect-Stub (Meta-Refresh + JS + Canonical) auf
  `/`, damit alte Links/Bookmarks nicht brechen. Diese Datei NICHT
  wieder mit echtem Seiteninhalt befüllen.
- `/layouts/overview.html` — interne Design-Historie (frühere
  Layout-Varianten). `noindex`, nicht öffentlich verlinkt.
- `/layouts/v3-herbstwaerme-navy-blog-*.html`, `impressum.html`,
  `datenschutz.html` — Unterseiten, bleiben in `/layouts/`, verlinken
  per `../` zurück zur Startseite (siehe Header-Routine unten).
- `cookie-consent.js` ermittelt den Link zur Datenschutzerklärung
  dynamisch über `document.currentScript.src` (nicht mehr hartkodiert
  `datenschutz.html`) — funktioniert dadurch unabhängig davon, ob das
  Skript von `/` oder von `/layouts/...` aus eingebunden wird. Diesen
  Mechanismus beibehalten, falls das Skript an weiteren Orten
  eingebunden wird.

## SEO & AEO

- Jede öffentliche Seite bekommt: eindeutigen `<title>`, `<meta
  name="description">`, `<link rel="canonical">`, Open-Graph- +
  Twitter-Card-Tags, `lang="de-CH"`.
- Strukturierte Daten (JSON-LD): `ProfessionalService`+`Person` und
  `FAQPage` auf der Startseite, `BlogPosting` auf jedem Blogartikel.
  Bei neuen Blogposts denselben `BlogPosting`-Block ergänzen
  (headline, image, datePublished, author, publisher,
  mainEntityOfPage).
- `robots.txt` + `sitemap.xml` liegen im Repo-Root. Bei neuen
  öffentlichen Seiten in `sitemap.xml` ergänzen; interne/Entwurfs-
  Seiten (Layout-Varianten, Vorschauen) per `robots.txt`-Disallow und
  `<meta name="robots" content="noindex, nofollow">` ausschliessen.
- Jeder Blogartikel bekommt am Ende einen "Weitere Beiträge"-Block
  (`.related`) mit Links zu den anderen Artikeln — internes Linking
  für Crawl-Tiefe/Themenautorität. Bei neuen Posts ergänzen und in
  bestehenden Artikeln nachziehen.
- **Keine erfundenen NAP-Daten** (Adresse, Telefon, Google-Rating o. Ä.)
  in Schema oder Texten verwenden — Impressum enthält aktuell nur
  Platzhalter. Sobald echte Kontaktdaten vorliegen: gleichzeitig in
  Impressum UND in den JSON-LD-Blöcken ergänzen (NAP-Konsistenz ist
  ein Rankingfaktor). Bis dahin bei generischen, nicht überprüfbaren
  Aussagen bleiben (z. B. "in der Schweiz" statt einer konkreten
  Adresse).
- Echte Domain-Autorität (Backlinks, Google Business-Profil,
  Verzeichniseinträge, Bewertungen) entsteht nicht durch Code —
  das sind Folgeschritte ausserhalb dieses Repos.

## Design-Routine: einheitlicher "Frame"-Look

Für alle Bild-/Medienkacheln auf der Seite (Hero-Slideshow, Portfolio-
Karten, Blog-Karten, Testimonial-Karten und jede künftige ähnliche
Komponente) gilt derselbe visuelle Rahmen, damit die Seite wie aus
einem Guss wirkt:

```css
.card-frame{
  background:#fff;padding:5px;border-radius:8px;margin-bottom:16px;
  box-shadow:0 30px 55px -24px rgba(22,15,10,.32),0 10px 24px -8px rgba(22,15,10,.16);
}
```

Das Passepartout ist bewusst dünn (5px bei `.card-frame`, 6px bei der
grösseren `.hero-frame`) für einen eleganten, hochwertigen Look —
nicht dicker machen.

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
- Ausnahme Blog-Karten (`.blog-card .ph`): `aspect-ratio:1/1` statt
  4/5, weil die Blog-Cover-Bilder eine Mischung aus Hoch- und
  Querformat sind — 4/5 hätte Querformat-Motive zu stark beschnitten
  (nur ~50 % der Bildbreite sichtbar). 1:1 ist der beste Kompromiss.
- Bilder in Blogartikeln (`.cover`, `.inline-img` auf den einzelnen
  Artikelseiten) werden NICHT beschnitten: volle Bildabmessungen
  (`width:100%;height:auto;`), nur per `max-width` (z. B. 560px Cover,
  480px Inline-Bild, auf Mobile `max-width:100%`) auf eine zur
  Textspalte passende Grösse begrenzt — kein `object-fit:cover` mit
  fixem `aspect-ratio` auf diesen Artikel-Bildern.
- Diese Artikel-Bilder sind linksbündig (`margin:0 0 <abstand>`),
  NICHT `margin:auto`/zentriert — sie sollen exakt an derselben
  linken Kante wie h1/h2/p im Artikel beginnen, nicht unabhängig
  mittig in der Spalte schweben.

## Design-Routine: Header auf Unterseiten

Jede eigenständige Unterseite (Blogartikel, Blog-Übersicht, Impressum,
Datenschutz und jede künftige ähnliche Seite) nutzt denselben Header
wie die Sidebar-Brand auf der Hauptseite, verlinkt auf die Startseite:

```html
<div class="top">
  <a class="brand" href="../">
    <span class="owner">Pablo Bieri</span>
    <span class="brand-name">picture-p</span>
    <span class="tagline">Foto- &amp; Videografie</span>
  </a>
  <a class="back" href="../">← Zurück zur Startseite</a>
</div>
```

(Seiten in `/layouts/` verlinken mit `../` zur Startseite an der
Repo-Wurzel, nicht mehr mit `v3-herbstwaerme-navy.html` — siehe
"Seitenstruktur" oben.)

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
- Mobile (≤600/640px, je nach Datei der bestehende Breakpoint): `.top`
  bekommt `flex-direction:column;align-items:flex-start;gap:10px;`,
  damit der Brand-Block links auf drei Zeilen Platz hat, und
  `.top a.back{align-self:flex-end;}`, damit der Link darunter
  rechtsbündig steht — nebeneinander in einer Reihe ist auf schmalen
  Viewports zu eng.

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
