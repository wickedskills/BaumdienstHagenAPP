# BaumWerk – Betriebssoftware für Baumpfleger

Offline- & online-fähige Web-App (PWA) für iPhone und Surface Pro 7. Ein Code, beide Geräte.
Capacitor-tauglich aufgebaut → später ohne Neuaufbau als echte iOS-/Windows-App verpackbar.

## Funktionen

- **Start** mit Kacheln + Bottom-Navigation (zentraler **+**-Knopf), Hamburger-Menü
- **Meine Arbeit:** Kunden · Bäume (mit deutschen + lateinischen Baumarten) · Angebote · Aufträge · Gefährdungsbeurteilungen · **Dokumente**
- **Angebot/Auftrag:** Dienstleistungs-Module mit Preisen, „Durchzuführende Arbeit mit" (SKT/Hubarbeitsbühne/Kran/vom Boden aus), Bäume spezifizieren, Personal-Tabelle, Zusätzliche Ausgaben inkl. **Halteverbot (ein-/beidseitig)**, Rabatt/Steuer, Unterschrift, **PDF-Export** + Text kopieren, „Aus Angebot erstellen", **Lexoffice-PDF-Import**
- **Hamburger Richtpreise** (netto) je Position eingeblendet + Übersicht in Einstellungen (`preise_hamburg.js`)
- **Gefährdungsbeurteilung:** 6-Schritt-Assistent, Personal manuell oder aus Auftrag, einem Auftrag zuordenbar, PDF
- **Dokumente:** PDFs/Fotos (Gewerbeanmeldung, Versicherung, Schulungen, ärztliche Eignung …) in IndexedDB, mit Ablaufwarnung
- **Karte:** OpenStreetMap + Satellit, Adresssuche (Nominatim), GPS, Bäume markieren
- **Arboristik:** Informationsblätter (CODIT, VTA, Astschutzbereich, Tomographie, Zugversuch …), 57 Bauminspektions-Merkmale, Baumpflege – plus **ZTV-Baumpflege** und **ETPS** als vollständige PDFs
- **Tree Climbing:** Techniken (SRS/MRS, Wurfleine, Verankerung), Rigging/Fällen, Basis- & Klemmknoten
- **Baumarten-Lexikon** (Start-Kachel): **komplette A–Z-Liste von baumkunde.de (959 Arten)**, deutsch + lateinisch, Filter Laub/Nadel/Strauch, Suche. Jede Art öffnet einen Steckbrief mit Link zum vollständigen baumkunde.de-Eintrag (Fotos + alle Felder); die gängigen ~69 Arten haben zusätzlich einen ausführlichen In-App-Steckbrief (Familie, Giftigkeit, Wuchshöhe, Blatt, Blüte, Frucht, Beschreibung)
- **Stammgewicht-Rechner**, **Meine Ausrüstung** (PSA-Prüfbuch), **Kalender** (.ics-Übergabe an iPhone-Kalender), **Meine Daten**, **Einstellungen** (USt., Daten-Backup)

## Dateien (alle in diesem Ordner)

| Datei | Zweck |
|---|---|
| `index.html` | Gerüst + Design |
| `app.js` | App-Logik |
| `preise_hamburg.js` | Hamburger Richtpreise (netto) |
| `inhalte_arbor.js` | Arboristik-Inhalte |
| `inhalte_climb.js` | Tree-Climbing-Inhalte |
| `baumarten_a.js`, `baumarten_b.js` | ausführliche Steckbriefe (69 gängige Arten) |
| `baumarten_full.js` | komplette Artenliste (959, baumkunde A–Z) |
| `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png` | PWA / Offline |
| `ZTV-Baumpflege_2017.pdf`, `ETPS-...pdf` | Regelwerke (Informationsblätter) |
| `capacitor.config.json`, `CAPACITOR.md` | spätere native App |
| `.nojekyll` | für GitHub Pages |

## Sofort nutzen

`index.html` im Browser öffnen. Alle Daten bleiben lokal auf dem Gerät.

## Auf GitHub hochladen + veröffentlichen (kostenlos)

1. Auf github.com ein **neues Repository** anlegen (z.B. `baumwerk`), „Public".
2. **Alle Dateien aus diesem Ordner** hochladen (Repo → „Add file" → „Upload files" → Dateien reinziehen → Commit). Tipp: die beiliegende `BaumWerk-App.zip` vorher entpacken und den Inhalt hochladen (nicht den Ordner selbst).
3. Repo → **Settings → Pages** → Source: „Deploy from a branch", Branch `main`, Ordner `/ (root)` → Save.
4. Nach 1–2 Minuten ist die App unter `https://DEIN-NAME.github.io/baumwerk/` live.
5. Auf dem **iPhone (Safari)**: Teilen → „Zum Home-Bildschirm". Auf **Surface (Edge)**: Adressleiste → Installieren.

## Offline / Online

- Offline (überall): Kunden, Bäume, Angebote/Aufträge, GB, Dokumente, Baumarten, Rechner, Richtpreise, Arboristik/Tree Climbing inkl. der beiden PDFs, PDF-Export.
- Internet (nur beim 1. Mal nötig, danach gecacht): Kartenkacheln, Adresssuche, Lexoffice-PDF-Import (pdf.js).

## Echte App + nativer Kalender

Siehe `CAPACITOR.md`. Web-Version nutzt .ics-Übergabe; die native iPhone-Kalender-Anbindung kommt über Capacitor (Mac/Xcode nötig).

## Daten sichern / Gerätewechsel

Einstellungen → Daten-Backup → Export (`.json`); auf dem anderen Gerät → Import. (Hinweis: hochgeladene Dokumente liegen separat in IndexedDB und sind nicht im JSON-Backup.)

## Hinweise

Fachinhalte und Richtpreise sind eine fundierte Orientierung, ersetzen aber keine Untersuchung vor Ort, keine SKT-Ausbildung und keine eigene Kalkulation.

---
Erstellt für BFT · info@beetlefortech.com
