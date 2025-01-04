# Installation und Setup

Diese Anleitung zeigt dir die vollständigen Schritte, wie du Git installierst, ein Projekt erstellst, es mit einem GitHub-Repository verbindest und den Next.js-Entwicklungsserver startest.

## 1. Installiere Git auf deinem Server

Git ist ein Versionskontrollsystem, das für die Arbeit mit Repositories auf deinem Server erforderlich ist. Die Installation von Git auf deinem Server ist der erste Schritt. Verwende dazu die folgenden Befehle:

```bash
sudo apt update
sudo apt install git
```

Der erste Befehl aktualisiert die Paketliste deines Servers, um sicherzustellen, dass du die neuesten Versionen der Softwarepakete erhältst. Der zweite Befehl installiert Git, das du dann für die Verwaltung deines Projekts und die Interaktion mit GitHub verwenden kannst.

### Überprüfen der Git-Installation

Um sicherzustellen, dass Git erfolgreich installiert wurde, kannst du den folgenden Befehl ausführen:

```bash
git --version
```

Wenn alles korrekt installiert ist, wird die Git-Version angezeigt.

## 2. Erstelle ein neues Projekt und füge dieses Repository hinzu

Nachdem Git erfolgreich installiert ist, kannst du ein neues Projekt auf deinem Server erstellen und das Repository klonen, das du verwenden möchtest.

Zuerst erstellst du ein neues Verzeichnis für dein Projekt und wechselst in dieses Verzeichnis:

```bash
mkdir myapp
cd myapp
```

Mit diesen Befehlen erstellst du das Verzeichnis `myapp` und wechselst in das Verzeichnis. Jetzt kannst du das Repository von GitHub klonen, indem du den folgenden Befehl verwendest:

```bash
git clone https://github.com/nextelements/nexteIements.git
```

Dieser Befehl lädt das gesamte Repository `nexteIements` von GitHub in dein Verzeichnis `myapp`. Alle Dateien und Ordner aus dem Repository werden in deinem aktuellen Arbeitsverzeichnis lokal gespeichert.

### Repository-Status prüfen

Um sicherzustellen, dass das Repository korrekt geklont wurde, kannst du den Befehl `git status` ausführen. Dieser zeigt den aktuellen Status des Repositories an und bestätigt, dass es korrekt geladen wurde.

## 3. Initialisiere ein eigenes Git-Repository

Nun, da du dein Projektverzeichnis hast, kannst du ein eigenes Git-Repository initialisieren. Dies ermöglicht es dir, mit Git zu arbeiten und deine Änderungen zu verfolgen. Außerdem musst du das Repository mit GitHub verbinden.

### Konfigurieren von Benutzername und E-Mail-Adresse

Bevor du mit Git arbeitest, solltest du deinen GitHub-Benutzernamen und deine E-Mail-Adresse konfigurieren, damit deine Commits korrekt deinem GitHub-Account zugeordnet werden. Verwende die folgenden Befehle:

```bash
git config --global user.name "username" // Github-Account-Benutzername
git config --global user.email "username@example.com" // Github-Account-E-Mail
```

Ersetze `"username"` durch deinen GitHub-Benutzernamen und `"username@example.com"` durch deine GitHub-E-Mail-Adresse. Diese Konfiguration wird global angewendet, sodass sie für alle Repositories gilt, die du auf deinem System erstellst.

### Initialisieren des Git-Repositories

Nun kannst du ein Git-Repository in deinem Projektverzeichnis initialisieren. Führe den folgenden Befehl aus:

```bash
git init
```

Dieser Befehl erstellt ein neues Git-Repository in deinem Projektverzeichnis. Als nächstes fügst du das entfernte GitHub-Repository als "origin" hinzu:

```bash
git remote add origin https://github.com/username/repository.git
```

Ersetze `username/repository.git` mit dem Pfad zu deinem Repository auf GitHub.

### Entwickler-Token erstellen

Für die Authentifizierung beim Pushen in dein GitHub-Repository wird ein Entwickler-Token benötigt, besonders wenn du Zwei-Faktor-Authentifizierung (2FA) für deinen GitHub-Account aktiviert hast. Du kannst ein Entwickler-Token erstellen, indem du dich bei GitHub anmeldest und den folgenden Link aufrufst:

[GitHub Entwickler-Token erstellen](https://github.com/settings/tokens/new)

Erstelle einen neuen Token mit den notwendigen Berechtigungen und speichere ihn sicher.

### GitHub-URL für das Remote-Repository setzen

Um die Authentifizierung beim Pushen zu automatisieren, kannst du den folgenden Befehl verwenden, um die URL des Remote-Repositories mit deinem Benutzername und Token zu setzen:

```bash
git remote set-url origin https://username:token@github.com/username/repository.git
```

> **Wichtig:** Der Befehl `git remote set-url origin https://username:token@github.com/username/repository.git` gilt als unsicher, weil der Token in der URL sichtbar ist. Es wird empfohlen, stattdessen die Authentifizierung über SSH oder ein anderes sicheres Verfahren zu verwenden.

### Erstellen eines Push-Commits und Pushen der Änderungen

Wechsel in das Root-Verzeichnis deines Projektes und führe den Befehl aus, um die Änderungen zu pushen:

```bash
npm run push
```

Dieser Befehl wird dazu verwendet, Änderungen von deinem lokalen Repository in das entfernte GitHub-Repository zu übertragen.

## 4. Installiere die Abhängigkeiten

Bevor du mit dem Entwickeln beginnst, musst du sicherstellen, dass alle Abhängigkeiten des Projekts installiert sind. Falls der `node_modules`-Ordner noch nicht vorhanden ist, kannst du dies mit dem folgenden Befehl tun:

```bash
npm install
```

Dieser Befehl installiert alle Abhängigkeiten, die im `package.json`-Dateiformat deines Projekts aufgeführt sind.

Falls dein Projekt ein Monorepo ist und mehrere Workspaces verwendet, solltest du auch den folgenden Befehl ausführen, um sicherzustellen, dass alle Abhängigkeiten korrekt installiert werden:

```bash
npm install --workspaces
```

## 5. Starte den Entwicklungsserver

Nun bist du bereit, die Anwendung lokal auszuführen. Um den Next.js-Entwicklungsserver zu starten, verwende den folgenden Befehl:

```bash
npm run dev
```

Dieser Befehl startet den Entwicklungsserver von Next.js, und deine Anwendung wird unter `http://localhost:3000` laufen. Du kannst nun deine Änderungen vornehmen und die Anwendung in Echtzeit testen.

### Überprüfen des Serverstatus

Wenn der Server erfolgreich gestartet wurde, solltest du eine Ausgabe sehen, die anzeigt, dass der Server auf dem angegebenen Port (standardmäßig `3000`) läuft. Du kannst die Konfiguration in der Datei `next.config.mjs` anpassen.

```js
// next.config.mjs
export default nextConfig = {
  reactStrictMode: true,
  transpilePackages: [ 
    '@nextelements/components',
    '@nextelements/hooks',
    '@nextelements/icons',
    '@nextelements/themes',
    '@nextelements/utilities',
  ],
}
```

## Zusammenfassung

Mit diesen Schritten hast du:
1. Git installiert und konfiguriert.
2. Ein Projekt erstellt und ein GitHub-Repository hinzugefügt.
3. Dein eigenes Git-Repository initialisiert und mit GitHub verbunden.
4. Die benötigten Abhängigkeiten installiert.
5. Den Entwicklungsserver für Next.js gestartet.

Du bist jetzt bereit, mit der Entwicklung deiner Anwendung zu beginnen!