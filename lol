const fs = require('fs').promises;
const path = require('path');

// Liste der Ordner und Dateien, die gelöscht werden sollen
const itemsToDelete = ['node_modules', 'package-lock.json', '.next', '.turbo'];

// Funktion, um die definierten Dateien/Ordner zu finden und zu löschen
async function deleteSpecifiedItems(startPath) {
  try {
    const entries = await fs.readdir(startPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(startPath, entry.name);

      if (entry.isDirectory()) {
        if (itemsToDelete.includes(entry.name)) {
          // Lösche den gesamten Ordner
          await deleteFolderRecursive(fullPath);
          console.log(`Ordner gelöscht: ${fullPath}`);
        } else {
          // Rekursiv weiter durchsuchen
          await deleteSpecifiedItems(fullPath);
        }
      } else if (itemsToDelete.includes(entry.name)) {
        // Lösche die Datei
        await fs.unlink(fullPath);
        console.log(`Datei gelöscht: ${fullPath}`);
      }
    }
  } catch (err) {
    console.error(`Fehler beim Verarbeiten von ${startPath}:`, err);
  }
}

// Funktion zum rekursiven Löschen von Ordnern
async function deleteFolderRecursive(folderPath) {
  try {
    const entries = await fs.readdir(folderPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(folderPath, entry.name);

      if (entry.isDirectory()) {
        await deleteFolderRecursive(fullPath);
      } else {
        await fs.unlink(fullPath);
      }
    }

    await fs.rmdir(folderPath);
  } catch (err) {
    console.error(`Fehler beim Löschen von ${folderPath}:`, err);
  }
}

// Hauptfunktion
(async () => {
  const startPath = './'; // Startordner, z. B. das Projektverzeichnis
  await deleteSpecifiedItems(startPath);
  console.log('Alle definierten Dateien/Ordner wurden gelöscht.');
})();