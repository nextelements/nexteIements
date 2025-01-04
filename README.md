# Installation
## Installiere Git auf deinem Server
```
sudo apt update
sudo apt install git
```

## Erstelle ein neues Projekt und füge dieses Repository hinzu
```
mkdir myapp
cd myapp
```
und klone dieses Repository mit `git clone https://github.com/nextelements/nexteIements.git` in das Verzeichnis.

## Initialisiere ein eigenes Repository
# Benutzername konfigurieren
```
git config --global user.name "username" // github account user
git config --global user.email "username@example.com" // github account email
```
# Initialisiere eigenes Repository
- [Auf Github anmelden](https://github.com/login)
- [Entwickler-Token erstellen](https://github.com/settings/tokens/new)
- [Ein neues Repository erstellen](https://github.com/new)

Der Entwickler-Token wird bei der Authentifizierung als Passwort verwendet.

```
git init
git remote add origin https://github.com/username/repository.git
```

Führe zusätzlich den Befehl `git remote set-url origin https://username:token@github.com/username/repository.git` aus, um automatisch beim push authentifiziert zu werden.
Wechsel anschließend in das Rootverzeichniss deines erstellen Projektes und führe den Befehl `npm run push` aus, um die Dateien in dein Repository zu klonen.

Der Befehl `git remote set-url origin https://username:token@github.com/username/repository.git` gilt als extrem unsicher und sollte daher nicht verwendet werden.

## Installiere dependencies
- Führe wenn notwendig noch `npm install`, optional  `npm install --workspaces` im Rootverzeichniss aus, wenn noch kein node_modules/-Ordner im Rootverzeichniss existiert.

## Dev-Server starten
- Starte den Nextjs-Entwicklungsserver mit `npm run dev`
