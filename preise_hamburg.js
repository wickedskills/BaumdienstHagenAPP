/* BaumWerk – Richtpreise Hamburg (Orientierung).
   Alle Werte NETTO (zzgl. 19% USt.), Raum Hamburg/Norddeutschland, Stand 2025/26.
   Unverbindliche Orientierung aus Marktrecherche – ersetzt keine eigene Kalkulation.
   Tatsächlicher Preis hängt von Objekt, Zugänglichkeit, Risiko, Zeitaufwand und Entsorgung ab. */
const RICHTPREISE = {
 stand: 'Richtpreise Hamburg · NETTO (zzgl. 19% USt.) · Stand 2025/26 · unverbindlich',
 module: {
  baumschnitt: { label:'Baumschnitt / Kronenpflege', mid:450,
   summary:'150–1.400 €/Baum · 35–60 €/m Höhe · SKT-A 45–65 €/Std',
   ranges:[
    {t:'Kronenpflege klein (bis 8 m)', von:150, bis:350, e:'€ / Baum'},
    {t:'Kronenpflege mittel (8–15 m)', von:300, bis:700, e:'€ / Baum'},
    {t:'Kronenpflege groß (über 15 m)', von:600, bis:1400, e:'€ / Baum'},
    {t:'Stundensatz Kletterer SKT-A', von:45, bis:65, e:'€ / Std'},
    {t:'Stundensatz Kletterer SKT-B', von:70, bis:95, e:'€ / Std'},
    {t:'Zweier-Team', von:140, bis:175, e:'€ / Std'},
    {t:'Alternativ nach Baumhöhe', von:35, bis:60, e:'€ / m'},
   ]},
  faellung: { label:'Baumfällung & Baumentfernung', mid:700,
   summary:'120–2.500 €/Baum (frei bis Seiltechnik) · HH ~10 m: 750–1.200 €',
   ranges:[
    {t:'Fällung am Stück, frei (klein)', von:120, bis:350, e:'€ / Baum'},
    {t:'Fällung mittel', von:350, bis:800, e:'€ / Baum'},
    {t:'Fällung groß / mit Seiltechnik (abtragen)', von:800, bis:2500, e:'€ / Baum'},
    {t:'Hamburg-Richtwert ~10 m', von:750, bis:1200, e:'€ / Baum'},
   ]},
  kronensicherung: { label:'Kronensicherung (statisch/dynamisch)', mid:500,
   summary:'250–1.600 € je Sicherungssystem (Gurtband)',
   ranges:[
    {t:'Gurtbandsystem dynamisch, 1 Ebene', von:250, bis:800, e:'€ / System'},
    {t:'aufwändig / mehrere Systeme', von:800, bis:1600, e:'€ / System'},
   ]},
  entsorgung: { label:'Entsorgung von Abfällen / Häckseln', mid:150,
   summary:'Häckseln 15–40 €/m³ · Container 7 m³ ~210–270 €',
   ranges:[
    {t:'Häckseln & Abfuhr', von:15, bis:40, e:'€ / m³'},
    {t:'Container Grünschnitt 7 m³ (HH)', von:210, bis:270, e:'€ / Stück'},
    {t:'Pauschale kleiner Baum', von:60, bis:200, e:'€'},
   ]},
  stumpf: { label:'Entfernung Baumstümpfe / Stubbenfräsen', mid:150,
   summary:'1,80–3,50 €/cm Ø · Mindestpauschale ~80–160 €',
   ranges:[
    {t:'Fräsen ebenerdig', von:1.8, bis:2.5, e:'€ / cm Ø'},
    {t:'Fräsen tief (ca. 30 cm)', von:2.5, bis:3.5, e:'€ / cm Ø'},
    {t:'Mindestpauschale / Anfahrt', von:80, bis:160, e:'€'},
   ]},
  untersuchung: { label:'Baumuntersuchung / Baumkontrolle', mid:80,
   summary:'VTA 3–25 €/Baum · eingehend 150–600 € · Gutachten 300–800 €',
   ranges:[
    {t:'Regelkontrolle VTA (Kataster, je Menge)', von:3, bis:25, e:'€ / Baum'},
    {t:'Stundensatz Kontrolle', von:60, bis:90, e:'€ / Std'},
    {t:'Eingehende Untersuchung (Bohrwiderstand/Tomographie)', von:150, bis:600, e:'€ / Baum'},
    {t:'Baumgutachten', von:300, bis:800, e:'€'},
   ]},
 },
 zusatz: {
  hub: { t:'Hubarbeitsbühne', von:150, bis:450, mid:300, e:'€ / Tag (Miete; mit Bediener mehr)' },
  kran: { t:'Autokran mit Bediener', von:500, bis:2000, mid:900, e:'€ / Tag (Std. 120–220 €)' },
  reise: { t:'An-/Abfahrt', von:0.5, bis:1.2, mid:60, e:'€ / km (oder 40–90 € pauschal)' },
  halteverbot: { e:'€ (Einrichtung inkl. Schilder)',
    einseitig:{ von:90, bis:150, mid:120 },
    beidseitig:{ von:140, bis:220, mid:170 } },
 },
};
if (typeof window !== 'undefined') window.RICHTPREISE = RICHTPREISE;
