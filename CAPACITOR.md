# BaumWerk als echte App (Capacitor) – nativer iPhone-Kalender

Die Web-App ist Capacitor-tauglich vorbereitet (`capacitor.config.json`, `webDir: "."`).
Damit lässt sich derselbe Code in eine **echte iOS-App** (und Windows/Android) verpacken – inkl. **nativem Kalender mit Zwei-Wege-Anbindung**. Der native Build muss auf einem **Mac mit Xcode** erfolgen (Apple-Developer-Konto ~99 €/Jahr).

## Einmalige Einrichtung (am Rechner)

```bash
# Im App-Ordner (enthält index.html)
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/ios
npx cap init BaumWerk com.beetlefortech.baumwerk --web-dir=.
npx cap add ios
npx cap sync
npx cap open ios     # öffnet Xcode → dort signieren & auf iPhone/in den App Store
```

## Nativer Kalender (Zwei-Wege)

Ein Kalender-Plugin installieren, z.B.:

```bash
npm install @ebarooni/capacitor-calendar
npx cap sync
```

Dann in der App (optional) statt der .ics-Übergabe das Plugin nutzen, z.B.:

```js
import { CapacitorCalendar } from '@ebarooni/capacitor-calendar';
// Beim Anlegen eines Termins:
await CapacitorCalendar.createEventWithPrompt({
  title: e.title, location: e.location, notes: e.notes,
  startDate: Date.parse(e.date + 'T' + (e.start||'09:00')),
  endDate: Date.parse(e.date + 'T' + (e.end||e.start||'10:00'))
});
```

Damit öffnet sich der **native iPhone-Kalender** zum Bestätigen, der Eintrag landet in iCloud und ist auf allen Apple-Geräten sichtbar. Berechtigung in `Info.plist` ergänzen: `NSCalendarsUsageDescription`.

## In der reinen Web-/PWA-Version

Ohne Capacitor funktioniert der Kalender über **„.ics-Übergabe"**: Termin anlegen → „In Kalender" → die .ics-Datei öffnet auf dem iPhone die Kalender-App zum Hinzufügen (Einbahn: App → iCloud). Das ist bereits eingebaut und braucht keinen Mac.
