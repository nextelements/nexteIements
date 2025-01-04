# Integration von `NextElements` - Tailwind CSS Plugin zur Erweiterung von Farb- und Layout-Themen

Das `NextElements` Plugin ermöglicht es dir, benutzerdefinierte Themes für Tailwind CSS zu integrieren und zu erweitern. Es arbeitet mit Farb- und Layout-Variablen und fügt ein neues Utility für das Farb- und Layout-Management hinzu, das du in deinem Tailwind CSS Setup verwenden kannst.

## Installation

Führe folgenden Befehl aus, um das Plugin zu installieren:

```
npm install @nextelements/themes
```

Stelle sicher, dass du auch Tailwind CSS installiert hast, falls dies noch nicht geschehen ist.

## Verwendung

Nach der Installation kannst du das Plugin in deiner `tailwind.config.mjs` wie folgt integrieren:

1. **Importiere das Plugin** in deiner Tailwind-Konfigurationsdatei:

```js
// tailwind.config.mjs
import { NextElements } from '@nextelements/themes/plugin'

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    NextElements({
      prefix: 'myapp',
      defaultTheme: 'light',
      defaultExtendTheme: 'light',
      themes: {
        // Optional: Deine benutzerdefinierten Themen
      },
    }),
  ],
};
```

2. **Erweiterung von Themes**: Du kannst eigene Themes zu `NextElements` hinzufügen. Achte darauf, dass du die `colors` und `layout` Eigenschaften angibst, die du in deinem Projekt verwenden möchtest.

```js
  // Beispiel für benutzerdefinierte Themen
  const themes = {
    customTheme: {
      colors: {
        primary: '#ff6347' // text-primary
        secondary: {        
          50: '#f5f3ff', // text-secondary-50
          100: '#ede9fe', // text-secondary-100
          200: '#ddd6fe', // text-secondary-200
          // ...
          950: '#4c1d95', // text-secondary-950
          DEFAULT: '#4b0082', // text-secondary
        }  
      },
      layout: {
        background: '#ffffff', // bg-background
      },
      extend: 'light', // optional: Erweitert ein bestehendes Theme
    },
  };

  module.exports = {
    plugins: [
      NextElements({
        themes: themes,
      }),
    ],
  }
```

## Funktionsweise

Das Plugin bietet die Möglichkeit, benutzerdefinierte Themes zu definieren, die dann in deinem Tailwind CSS Setup verwendet werden können. Hier eine kurze Übersicht:

1. **Themes definieren**: Du kannst ein Theme mit einer Kombination aus `colors` und `layout`-Attributen erstellen. Die Farben werden in CSS-Variablen umgewandelt, und die Layouts können als Utility-Klassen angewendet werden.
   
2. **Farb- und Layout-Konfigurationen**: Das Plugin nutzt die `Color`-Bibliothek, um Farbwerte zu analysieren und zu verarbeiten. Es gibt auch Mechanismen zur Verarbeitung von Transparenz- und Layout-Werten.

3. **Utility-Klassen und Varianten**: Das Plugin generiert Tailwind-Utility-Klassen, die für die verschiedenen Themes verwendet werden können. Du kannst die `color-scheme`-Eigenschaft und Farb- oder Layout-Variablen nutzen, um die gewünschte Benutzeroberfläche dynamisch anzupassen.

## Beispiel

### Farben und Layout verwenden:

In deinem HTML oder JSX kannst du nun deine benutzerdefinierten Farben und Layouts verwenden, basierend auf den erstellten Themes:

```js
  <div className="customTheme:bg-primary">
    <!-- Inhalt mit benutzerdefiniertem Farb- und Layout-Theme -->
  </div>
```

### Verwendung von Variablen:

Die erzeugten CSS-Variablen ermöglichen es dir, dynamisch auf Farben und Layouts zuzugreifen:

```js
  <div className="bg-[var(--myapp-primary)]">
    <!-- Inhalt, der die CSS-Variable für die Farbe verwendet -->
  </div>
```

## Wichtige Funktionen

- **Farb- und Layout-Management**: Automatisiert das Erstellen von Farb- und Layout-Themen und die Generierung der entsprechenden CSS-Variablen.
- **Dynamische Theme-Unterstützung**: Du kannst mehrere Themes mit einer einfachen Konfiguration definieren und wechseln.
- **Farbtransparenz**: Das Plugin kümmert sich um die Transparenz von Farben und deren Variablen.
- **Präfix-Unterstützung**: Der Präfix, den du für dein Projekt festlegst, wird in allen generierten CSS-Klassen berücksichtigt.

## Anmerkungen

- Das Plugin nutzt die `deepmerge`-Methode, um benutzerdefinierte Themen zu kombinieren und Standardwerte zu überschreiben.
- Das Plugin erstellt CSS-Variablen, die sowohl die Farbwerte als auch die Layouts abdecken, sodass du in deinem CSS auf sie zugreifen kannst.
- Das Plugin stellt auch Utility-Klassen für `color-scheme` und CSS-Variablen zur Verfügung.

Für weitere Informationen, siehe die [offizielle Dokumentation von Tailwind CSS](https://tailwindcss.com/docs).

---

# ThemeProvider Integration mit benutzerdefiniertem Thema in Next.js

Diese Anleitung zeigt, wie du den `ThemeProvider`-Kontext in deinem Next.js-Projekt sowohl im **Pages Router** als auch im **App Router** einbindest und dabei ein **benutzerdefiniertes Thema** zusammen mit den Standardthemen verwendest.

## 1. Verwendung im **Pages Router**

Im **Pages Router** von Next.js definierst du den `ThemeProvider` üblicherweise auf der höchsten Ebene der Anwendung, z. B. in der `pages/_app.js`-Datei.

### Schritt 1: `ThemeProvider` in `pages/_app.js` einbinden

Erstelle oder bearbeite die Datei `pages/_app.js`, um den `ThemeProvider` um die gesamte Anwendung zu wickeln und ein benutzerdefiniertes Thema zu den Standardthemen hinzuzufügen:

```js
import { ThemeProvider } from '@nextelements/themes';  // Importiere den ThemeProvider
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      themes={['light', 'dark', 'custom']}  // Standard- und benutzerdefiniertes Thema hinzufügen
      defaultLightTheme="light"
      defaultDarkTheme="dark"
      initialTheme="system"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
```

### Erklärung:
- In der `themes`-Prop werden die Standardthemen `light` und `dark` sowie das benutzerdefinierte Thema `custom` als Array übergeben.
- Das benutzerdefinierte Thema `custom` kann nun in der gesamten Anwendung verwendet werden.

## 2. Verwendung im **App Router**

Im **App Router** von Next.js wird der Kontext ähnlich wie im Pages Router eingebunden, aber innerhalb eines Layouts. Der App Router nutzt das Layout-System, das in der `app`-Ordnerstruktur basiert.

### Schritt 1: `ThemeProvider` in `app/layout.js` einbinden

Erstelle oder bearbeite die Datei `app/layout.js`, um den `ThemeProvider` auf der höchsten Ebene innerhalb des Layouts zu verwenden und ein benutzerdefiniertes Thema hinzuzufügen:

```js
import { ThemeProvider } from '@nextelements/themes';  // Importiere den ThemeProvider
import '../styles/globals.css'

function Layout({ children }) {
  return (
    <ThemeProvider
      themes={['light', 'dark', 'custom']}  // Standard- und benutzerdefiniertes Thema hinzufügen
      defaultLightTheme="light"
      defaultDarkTheme="dark"
      initialTheme="system"
    >
      {children}
    </ThemeProvider>
  )
}

export default Layout
```

### Erklärung:
- Der `ThemeProvider` wird hier in das Layout eingebunden, sodass das benutzerdefinierte Thema `custom` zusammen mit den Standardthemen `light` und `dark` für die gesamte Anwendung verfügbar ist.

## 3. Verwendung des benutzerdefinierten Themas

Um das benutzerdefinierte Thema in deiner Anwendung zu nutzen, kannst du es mit dem `useTheme`-Hook innerhalb deiner Komponenten abrufen und verwenden:

```js
import { useTheme } from '@nextelements/themes';  // Importiere den useTheme-Hook

function MyComponent() {
  const { themes, theme, setTheme } = useTheme();

  function onChange(e) => {
    setTheme(e.target.value)
  }

  return (
    <div>
      Current theme: {theme}<br />
      Choose another theme:
      <select value={theme} onChange={onChange}>
        {themes.map((scheme, i) => (
          <option 
            key={i} 
            value={scheme}
          >{scheme}</option>
        ))}
      </select>
    </div>
  )
}
```

### Erklärung:
- Der `useTheme`-Hook wird verwendet, um auf das aktuelle Thema zuzugreifen und das Thema nach Bedarf zu ändern.
- Du kannst das benutzerdefinierte Thema `custom` verwenden, indem du `setTheme('custom')` aufrufst.

---

# `extendVariant` - Erweiterung von Tailwind-Varianten für Komponenten

Die Funktion `extendVariant` ermöglicht es dir, die Varianten einer bestehenden React-Komponente zu erweitern oder zu überschreiben, basierend auf einem bestimmten `displayName`-Präfix. Diese Funktion nutzt die Bibliotheken `tailwind-variants` und `tailwind-merge`, um Varianten zu kombinieren und Klassen zu vereinen.

## Funktion: `extendVariant`

```
export function extendVariant(Component, variantsToExtend, mergeClasses = true) {
  // ...Funktionscode...
}
```

### Parameter:

- **`Component`** (`React.Component`): Die React-Komponente, deren Varianten du erweitern möchtest.
- **`variantsToExtend`** (`object`): Ein Objekt, das die Varianten enthält, die du zur bestehenden Komponente hinzufügen oder überschreiben möchtest. Diese Varianten werden mit den aktuellen Varianten der Komponente zusammengeführt.
- **`mergeClasses`** (`boolean`, optional): Gibt an, ob die Tailwind-Klassen mit `twMerge` kombiniert werden sollen. Standardmäßig ist dieser Wert auf `true` gesetzt, was bedeutet, dass überschüssige oder doppelte Klassen entfernt werden.

### Rückgabewert:

Die Funktion gibt eine neue Komponente zurück, die die erweiterten Varianten enthält. Diese neue Komponente übernimmt die Eigenschaften der ursprünglichen Komponente und kombiniert die erweiterten Tailwind-Klassen mit den vorhandenen.

### Funktionsweise:

1. **Prüfung des `displayName`**: Die Funktion überprüft, ob der `displayName` der Komponente mit dem angegebenen prefix übereinstimmt. Falls nicht, wird eine Warnung ausgegeben und die Komponente unverändert zurückgegeben.
2. **Erweiterung der Varianten**: Die Varianten der Komponente werden mit den neuen Varianten zusammengeführt.
3. **Kombination der Tailwind-Klassen**: Falls aktiviert (`mergeClasses = true`), wird die `twMerge`-Funktion verwendet, um die Klassen zu kombinieren und zu optimieren.
4. **Rückgabe der erweiterten Komponente**: Eine neue Komponente wird mit den erweiterten Varianten und den optimierten Klassen erstellt und zurückgegeben.

### Beispiel:

```js
import { Button } from '@nextelements/compontents';
import { extendVariant } from '@nextelements/themes';

// Erweiterte Varianten für die Button-Komponente
const extendedButton = extendVariant(Button, {
  variants: {
    ...Button.variants,
    newVariant: 'bg-green-500',
  }
});

// Verwendung der erweiterten Button-Komponente
<extendedButton variant="newVariant" size="large" />
```

### Hinweise:

- Um sicherzustellen, dass Klassen korrekt zusammengeführt werden, verwendet die Funktion `twMerge`, um redundante oder sich überschneidende Tailwind-Klassen zu vermeiden.

