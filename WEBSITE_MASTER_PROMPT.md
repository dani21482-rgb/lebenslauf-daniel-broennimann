# Master-Prompt: CV-Website Daniel Brönnimann

> Diesen kompletten Prompt in ein KI-Tool (Claude Code, ChatGPT, etc.) einfügen, um die Lebenslauf-Website zu bauen oder weiterzuentwickeln.

---

## 1. Auftrag

Baue eine klassische, seriöse, voll responsive **Lebenslauf-Website** für Daniel Brönnimann als statische HTML/CSS/JS-Seite (kein Build-Tool, kein Framework nötig — einfache, wartbare Dateien). Sprache: **Deutsch**, durchgehend.

Daniel hat eine ungewöhnliche Doppel-Biografie: solide **industrielle/technische Handwerkskarriere** (Polymechaniker → Qualitätsmanager → Prozessfachmann 3D-Laser) **plus** eine **unternehmerische/digitale Episode** (Start-up-Gründer mit patentiertem Produkt, Online-Marketing-Diplom, UI/UX-Praktikum). Die Website muss beide Seiten glaubwürdig transportieren: technisch-präzise UND digital-modern — nicht nur eine Werkstatt-CV-Vorlage, aber auch keine reine Kreativ-Agentur-Seite.

---

## 2. Vorhandene Projekt-Assets (bereits im Repo)

- `lebenslauf.md` — vollständige Rohdaten (siehe Abschnitt 3)
- `index.html` — bereits existierende, fertig gebaute Vorgängerversion (1681 Zeilen, dunkel/gelb/weiss, Agentur-Stil mit Hero/Clients/Services/Works/Stats/About/Skills/Experience/Certs/Education/CTA). **Kann als Basis dienen oder komplett verworfen werden** — das ist eine offene Design-Entscheidung, keine Vorgabe.
- `zeugnisse_und_zertifikate.md` — Manifest aller Belegdokumente (Arbeitszeugnisse, Diplome, Zertifikate) mit genauer Zuordnung zu den Stationen in Abschnitt 3. Einzelne Zeugnisse liegen in `Bewerbung_2023_08 2/` (Sammel-PDFs) und `Zeugnis_und_Zertifikate/` (Einzeldateien) und können pro Station verlinkt oder als Download angeboten werden.
- `Bilder/` — Bildmaterial (Portraitfoto etc.)
- `master.md` — allgemeines KI-Verhaltens-Regelwerk (Deutsch, Clean Code, Security) — falls als aktive Arbeitsanweisung gewünscht, sonst ignorieren.

**Bewusst ausgeschlossen** (zu persönlich/irrelevant für eine öffentliche Seite): Assessment-Center-Bericht, Persönlichkeitsprofil (LMI), Steuer-/Rechnungsunterlagen.

---

## 3. Vollständige Lebenslauf-Daten

### Persönliche Daten
| | |
|---|---|
| Name | Daniel Brönnimann |
| Geburtsdatum | 21.04.1982 |
| Nationalität | Schweizer |
| Heimatort | Wald BE |
| Zivilstand | Ledig |
| Adresse | Untere Bahnhofstrasse 1, 9500 Wil SG |
| Telefon | +41 79 844 87 48 |
| E-Mail | dani21.4.82@gmail.com |
| Führerausweis | Kategorie B |

### Berufliche Laufbahn (chronologisch, neueste zuerst)

**Jan. 2024 – offen | Prozessfachmann 3D Laser | Büchi AG, Wil SG** *(Zwischenzeugnis vom 10.02.2026 vorhanden)*
Machbarkeitsabklärung neuer Kundenanfragen, Fertigungskonzepte/Aufspannungen, Konstruktion effizienter Aufnahmen, Programmierung/Optimierung 5-Achsen CAM Cell + Teaching Panel, Arbeitsanweisungen, Einrichten der Maschinen für 3D-Laserschweissen/-Schneiden, Qualitätssicherung (Medizin-, Automobil-, Textilindustrie), Einarbeitung/Anleitung von Mitarbeitenden, Wartungskoordination.

**Feb. – Juni 2023 | Verkauf & Projektleitung Maschinen-/Metallbau | Ed. Keller AG, Kirchberg SG**
Offerten (Preis/Termin), AVOR/PPS, Einkauf Rohmaterial, Logistikorganisation, verlängerte Werkbank (Feuerverzinken, Pulverbeschichtung). Tools: Profix, Fab, Trumpf, Excel, Outlook.

**Feb. – Juni 2022 | Polymechaniker – Stv. Abteilungsleiter Zerspanung | Angehrn AG Umformtechnik, Degersheim**
5-Achsen-CNC einrichten/bedienen, Masskontrolle, 3D-Messmaschine, konventionelle Fertigung.

**Juli – Dez. 2021 | Mitarbeiter PPS-AVOR-Disposition | Universal-Job AG (Kundeneinsatz), Wil SG**
Arbeitsvorbereitung Montage, Stücklisten, Materialbewirtschaftung, Maschinenauslastung.

**April – Juni 2021 | Sachbearbeiter Verkaufsinnendienst | Universal-Job AG (Kundeneinsatz), Wil SG**
Technische AVOR, Fertigungsaufträge, 3D-CAD-Inventor-Zeichnungen, Projektleiter-Support.

**Juli – Sept. 2020 | Product Owner Webseite (Praktikum) | TFS Tuned for Sports AG, Rickenbach**
UI/UX Design und Webseiten-Entwicklung, Product-Owner-Rolle im agilen Umfeld.

**Mai 2019 – März 2021 | Gründer & CEO | CEDM GmbH, Wil SG**
Start-up-Gründung (CHE-457.750.280). Produktentwicklung E-BATHBOARD® (patentiertes Bad-Multimedia-Accessoire): Lastenheft, Technologie-Evaluation, Prototyp → 0-Serie, Patent (CH 709 966 A2), Fertigung/Logistik Asien. Marketing & Vertrieb: Marktanalyse, Branding (Marke 745596), Website UI/UX + E-Commerce (E-BATHBOARD.CH), SEO/SEA/SMM, B2B-Akquise (Manor, geschenkidee.ch, Crowdfunding "100 Days"), Grafik/Video/Verpackungsdesign.

**Okt. 2018 – März 2019 | Projektleiter Technik / CAD-3D-Zeichner (befristet) | PDS Peter Handels AG, Schwarzenbach**
CAD-Konstruktion (Solid Edge), fotorealistische Ausarbeitung (KeyShot), Kunststoffteile (PP/PC/PET/PVC), Preis-/Terminverhandlung, Nullserie/Prototyping.

**Juni 2017 – Sept. 2018 | Qualitätsmanager – ISO 9001:2015 | Hartchromwerk Brunner AG, St. Gallen**
QM-System-Pflege, interne/externe Audits, Korrekturmassnahmen, Eingangs-/Endkontrolle, Kalibrierung Messmittel, erfolgreiches SGS-Zwischenaudit.

**Aug. 2015 – März 2017 | Technischer Berater / Stv. Filialleiter | Uiker Wälzlager AG, Freienbach/St. Gallen**
Technischer/kommerzieller Verkauf, Offerten, Lagerbewirtschaftung, Stv. Filialleitung.

**Juni 2009 – Juli 2015 | Kontrolleur / Leiter Qualitätskontrolle & Logistik | Büchi AG, Wil**
Erststück-/Endkontrolle, Messmittelverwaltung (3D FARO CAM2Q), Massprotokolle/Zeugnisse, Logistikorganisation, Stv. Produktionsleiter.

**Juli 2007 – Feb. 2009 | Polymechaniker / CNC-Programmierer | Pamatool AG, Wilen TG**
CNC-Fräsen (Kao-Ming 1200, FANUC), Prototypen bis Serienfertigung.

**Juni 2005 – Juni 2007 | Polymechaniker | Alme AG, Aadorf**
Präzisionsschleifen (innen/aussen/flach), Montage HP Indigo Division.

**Juni – Nov. 2004 | Polymechaniker (temporär) | Eurojob Ost AG, Wil**
Drehen/Fräsen/Schweissen MIG/TIG.

**Juli – Dez. 2003 | Polymechaniker (befristet) | Schmid AG, Eschlikon**
Dreh-/Frästeile, Einzelanfertigungen und Kleinserien.

**Aug. 1998 – Mai 2002 | Lehrling Polymechaniker EFZ | Stihl & Co AG, Wil**
4-jährige Berufslehre, eidg. Fähigkeitszeugnis.

### Aus- und Weiterbildungen
| Zeitraum | Ausbildung | Institution |
|---|---|---|
| 2020–2021 | Adobe Photoshop CC | Online |
| 2020–2021 | Google Zertifikate (Analytics, Ads/SEA) | Google |
| 2019–2020 | **Dipl. Online Social Media Marketing Manager IAB** | Klubschule Migros, St. Gallen |
| 2013 | **Dipl. Qualitätsmanager FA** | ZBW, St. Gallen |
| 2010–2012 | **Eidg. Dipl. Prozessfachmann EFA** | ZBW, St. Gallen |
| 2017–2018 | Technischer Zeichner CAD 3D (Fernstudium) | Fernakademie Hamburg |
| 1998–2002 | **Polymechaniker EFZ** | Stihl & Co AG, Wil |

### Zertifikate & Kurse
- **AI-Automations-Manager (TÜV SÜD)** — zertifiziert 30.01.2026, gültig bis 29.01.2029
- **Bedienerkurs TruLaser Cell 3000** (TRUMPF), 22.–26.01.2024
- Social Media Marketing Masterclass (Udemy, 18.5 Std.)
- Google Analytics 4 (Udemy, 10 Std.)
- Google Ads inkl. ChatGPT (Udemy, 9 Std.)
- Schweisskurs Swissmechanik (Elektroden, Löten, MIG/MAG)
- CNC-Programmierung (Heidenhain 415/425, Traub TX 8F, FANUC, Mastercam X3)
- 3D-Messtechnik (FARO CAM2Q)
- CNC Drehen & Fräsen (Q plus), CAD 3D (Solid Works 3D)

### Kenntnisse & Fähigkeiten
- **Sprachen:** Deutsch (Muttersprache), Englisch (Grundkenntnisse technisch)
- **CAD/CAM/CNC:** Solid Edge, Solid Works 3D, Mastercam X3, KeyShot, AutoCAD, 5-Achsen-CNC
- **Lasertechnik:** TRUMPF TruLaser Cell 3000, MMC200X
- **Projektmanagement:** Confluence, Jira
- **Office:** Word, Excel, Access, PowerPoint
- **ERP/PPS:** Abacus, SAP, CRM, Profix, Fab
- **Design:** Adobe Photoshop CC, Procreate, Blender 3D
- **Online-Marketing:** Google Analytics/Ads, SEO, SEA, SMM, CRO
- **Web/Digital:** CMS, E-Commerce (Shopify), UI/UX Design
- **AI/Automation:** TÜV-SÜD-zertifiziert
- **Kompetenzen:** Projektleitung/Prozessmanagement, Start-up-Gründung, Produktentwicklung (Idee→Serienreife), ISO-9001-QM, AVOR/PPS, Mechanik/Blechbearbeitung, Montage/Revisionen, Patentierung, Kundenberatung, Online-Kampagnen, SEO, B2B-Vertrieb, technische Dokumentation, räumliches Vorstellungsvermögen, analytisches Denken

### Schulbildung
1995–1998 Oberstufe, Bronschhofen SG · 1989–1995 Unterstufe, Bronschhofen SG

### Portfolio / Eigene Projekte
- **E-BATHBOARD®** (CEDM GmbH): patentiertes Bad-Accessoire mit Multimedia-Funktion, kompletter Produktzyklus, Kunststoffspritzguss-Produktion in Asien, Markenregistrierung, Shopify-Shop, Crowdfunding, Vertrieb über Manor/geschenkidee.ch
- **Kreative Arbeiten:** Blender-3D-Projekte, Procreate-Illustrationen (Pop Art), Bleistift-Handzeichnungen, Verpackungsdesign

### Referenzen
Auf Anfrage

---

## 4. Design-Referenzen (recherchiert und live geprüft, Stand Juli 2026)

### UX-Referenzen — Struktur & Klarheit für Recruiter
1. **[Rosa Chae](https://rosachae.com)** — klare Nav, Resume-PDF direkt verlinkt, Philosophie-Statement sofort sichtbar
2. **[Laura Rountree](https://www.laurarountree.net)** — Rollen-Klarheit im Header, Resume prominent, klar betitelte Case Studies
3. **[Adham Dannaway](https://adhamdannaway.com)** — saubere IA (Portfolio/Blog/About), Positionierung in einem Satz, konkrete Nachweise statt Textwüste

### UI-Referenzen — visuelles Handwerk & Polish
1. **[Brittany Chiang](https://brittanychiang.com)** — Referenz-Standard: sauberes Grid, durchdachte Typografie, datierte Experience-Timeline mit Skill-Tags
2. **[Samuel Kraft](https://samuelkraft.com)** — reduzierte, ruhige Typografie, viel Weissraum, feine Micro-Interactions
3. **[Bruno Simon](https://bruno-simon.com)** — nur als Inspirationsgrenze (3D-Portfolio, kein CV-Format) — zeigt, wie weit UI-Handwerk gehen kann, **nicht** als Vorlage für dieses Projekt

**Wie anwenden:** Struktur/Informationsarchitektur von Chae/Rountree/Dannaway übernehmen (klare Nav, Resume/Download-Zugriff, kurze Positionierung oben, scanbare Abschnitte). Typografisches Handwerk und ruhige, präzise Gestaltung von Chiang/Kraft als Ziel-Qualität für Umsetzung — passt zum seriösen, technisch-präzisen Ton, den Daniels Profil braucht. Bruno Simon nicht kopieren, nur als Referenz für "wie hochwertig UI/UX-Handwerk sein kann".

---

## 5. Anforderungen an die Website

**Struktur (Sektionen):**
Hero/Kurzprofil → Berufliche Laufbahn (chronologische Timeline, neueste zuerst) → Ausbildung & Weiterbildung → Zertifikate & Kurse → Kenntnisse & Fähigkeiten (Tools, Sprachen, Kompetenzen) → Portfolio/Eigene Projekte (E-BATHBOARD, Kreatives) → Kontakt/Referenzen

**Technisch:**
- Statisches HTML/CSS/JS, kein Framework/Build-Step erforderlich
- Vollständig responsive (Mobile-First), da viele Recruiter auf dem Handy schauen
- Print-freundliches Stylesheet (`@media print`) — klassischer Anwendungsfall für Lebenslauf-Seiten (PDF-Export durch Browser-Druck)
- Barrierefreiheit: semantisches HTML, ausreichende Kontraste, Alt-Texte für Bilder
- Performance: keine schweren externen Abhängigkeiten, Bilder optimiert
- Einzelne Zeugnis-/Zertifikat-Dokumente pro Station verlinkbar (Download oder Modal), Quelle: `zeugnisse_und_zertifikate.md`

**Ton & Design-Richtung:**
- Seriös, präzise, vertrauenswürdig (industrieller Hintergrund) — aber mit spürbarer digitaler/gestalterischer Kompetenz (Start-up, UI/UX, Marketing) statt reiner Werkstatt-Optik
- Keine verspielte/gimmick-lastige Umsetzung (kein 3D-Spiel-Stil wie Bruno Simon)
- Farbschema und Bildmaterial: `Bilder/`-Ordner nutzen; falls Portraitfoto vorhanden, prominent im Hero einsetzen

**Nicht einbeziehen:** Assessment-Center-Bericht, Persönlichkeitsprofil (LMI), Steuer-/Rechnungsunterlagen.

---

## 6. Erwartetes Ergebnis

Eine fertige, eigenständig lauffähige `index.html` (+ ggf. `style.css`, `script.js`), die obige Struktur, Daten und Design-Richtung umsetzt — bereit zum Testen im Browser und späteren Deploy (z.B. GitHub Pages über das bestehende Repo `dani21482-rgb/lebenslauf-daniel-broennimann`).
