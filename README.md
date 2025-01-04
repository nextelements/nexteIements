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

```
git init
git remote add origin https://github.com/username/repository.git
git remote set-url origin https://username:token@github.com/username/repository.git
```

Gehe in das Rootverzeichniss deines erstellen Projektes und führe den befehl `npm run push` aus, um die Dateien in dein Repository zu klonen.

## Installiere dependencies
- Führe `npm install` im Rootverzeichniss aus.

## Dev-Server starten
- Starte den Nextjs-Entwicklungsserver mit `npm run dev`
