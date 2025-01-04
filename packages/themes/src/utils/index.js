/**
 * Führt ein tiefes Mergen von zwei Objekten durch.
 * Diese Funktion kombiniert die Werte von zwei Objekten, wobei rekursiv verschachtelte Objekte gemerged werden.
 * Falls ein Schlüssel im Zielobjekt nicht existiert, wird er hinzugefügt.
 *
 * @param {Object} target - Das Zielobjekt, das mit den Werten aus dem Quellobjekt aktualisiert wird.
 * @param {Object} source - Das Quellobjekt, dessen Werte ins Zielobjekt kopiert werden.
 * @returns {Object} - Das Zielobjekt nach dem Mergen der beiden Objekte.
 */
export const deepmerge = (target, source) => {
  if (typeof target !== 'object' || target === null) target = {};
  if (typeof source !== 'object' || source === null) return target;

  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      target[key] = deepmerge(target[key] ? { ...target[key] } : {}, source[key]);
    } else if (Array.isArray(source[key])) {
      target[key] = Array.isArray(target[key]) ? [...target[key], ...source[key]] : [...source[key]];
    } else if (source[key] !== undefined && source[key] !== null) {
      target[key] = source[key];
    }
  }
  return target;
};


/**
 * Vertauscht die Werte der Farben in einem Objekt.
 * Diese Funktion nimmt ein Objekt mit Farbwerten und vertauscht die ersten und letzten
 * Werte der Schlüssel, wobei die mittleren Werte bei einer ungeraden Anzahl unverändert bleiben.
 *
 * @param {Object} colors - Ein Objekt, das Farbnamen als Schlüssel und Farbwerte als Werte enthält.
 * @returns {Object} - Ein neues Objekt mit den vertauschten Farbwerten.
 */
export const swap = (colors) => {
  const swappedColors = {};
  const keys = Object.keys(colors);
  const length = keys.length;

  for (let i = 0; i < length / 2; i++) {
    const key1 = keys[i];
    const key2 = keys[length - 1 - i];

    swappedColors[key1] = colors[key2];
    swappedColors[key2] = colors[key1];
  };

  if (length % 2 !== 0) {
    const middleKey = keys[Math.floor(length / 2)];
    swappedColors[middleKey] = colors[middleKey];
  };

  return swappedColors;
};

/**
 * Wandelt ein flaches Objekt in ein verschachteltes Objekt um.
 * Die Schlüssel des flachen Objekts werden an den Bindestrichen (`-`) getrennt, um eine Hierarchie zu erstellen.
 * Wenn beispielsweise der Schlüssel `group-level` existiert, wird `group` als Schlüssel und `level` als Wert verwendet.
 *
 * @param {Object} flatObj - Ein flaches Objekt, das in ein verschachteltes Objekt umgewandelt werden soll.
 * @returns {Object} - Ein verschachteltes Objekt, das die Struktur der Schlüssel des flachen Objekts widerspiegelt.
 */
export const flattenToObject = (flatObj) => {
  const result = {};

  for (const key in flatObj) {
    const parts = key.split('.');
    const group = parts[0];
    const level = parts[1];

    if (!result[group]) {
      result[group] = {};
    };

    const finalLevel = level || 'DEFAULT';

    if (!result[group][finalLevel]) {
      result[group][finalLevel] = {};
    };

    result[group][finalLevel] = flatObj[key];
  };

  return result;
};

/**
 * Wandelt ein verschachteltes Objekt in ein flaches Objekt um.
 * Diese Funktion geht rekursiv durch alle verschachtelten Ebenen und erstellt einen flachen Schlüssel,
 * der die Verschachtelung widerspiegelt. Der Präfix und Suffix werden an den Schlüsseln hinzugefügt.
 *
 * @param {Object} object - Das verschachtelte Objekt, das flach gemacht werden soll.
 * @param {string} [prefix=''] - Der Präfix, der zu den Schlüsseln hinzugefügt wird.
 * @param {string} [suffix='-'] - Der Suffix, der zu den Schlüsseln hinzugefügt wird.
 * @returns {Object} - Ein flaches Objekt mit verschachtelten Schlüssel-Wert-Paaren.
 */
export const flattenObject = (object, prefix = '') => {
  let result = {};

  for (const [key, value] of Object.entries(object)) {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          result[`${newKey}.${index + 1}`] = item;
        });
      } else {
        Object.assign(result, flattenObject(value, newKey));
      }
    } else {
      result[newKey] = value;
    }
  }

  return result;
};

/**
 * Wandelt ein flaches Objekt zurück in seine verschachtelte Struktur um.
 * Es wird davon ausgegangen, dass die flachen Schlüssel durch einen Suffix getrennt sind (z. B. durch `-`),
 * und die Struktur wird rekursiv aufgebaut.
 *
 * @param {Object} flatObj - Ein flaches Objekt, das in ein verschachteltes Objekt umgewandelt werden soll.
 * @param {string} [prefix=''] - Der Präfix, der zu den Schlüsseln hinzugefügt wird.
 * @param {string} [suffix='-'] - Der Suffix, der zu den Schlüsseln hinzugefügt wird.
 * @returns {Object} - Das rekonstruiert verschachtelte Objekt.
 */
export const unflattenObject = (flatObj, prefix = '') => {
  const result = {};

  for (const [ key, value ] of Object.entries(flatObj)) {
    const keys = key.split('.');

    keys.reduce((acc, part, index) => {
      if (index === keys.length - 1) {
        acc[part] = value;
      } else {
        acc[part] = acc[part] || {};
      }
      return acc[part];
    }, result);
  };

  return result;
};

/**
 * Überprüft, ob das gegebene Objekt `o` den Typ `undefined` hat.
 * Diese Funktion gibt `true` zurück, wenn das Objekt `o` `undefined` ist, andernfalls `false`.
 *
 * @param {object} o - Das zu überprüfende Objekt, dessen Typ auf `undefined` geprüft wird.
 * @returns {boolean} - Gibt `true` zurück, wenn das Objekt `o` `undefined` ist, andernfalls `false`.
 */
export const isUndefined = (o) => typeof o === 'undefined';

/**
 * Entfernt bestimmte Schlüssel aus einem Objekt.
 * Diese Funktion filtert die Schlüssel, die in der `keysToOmit` Liste enthalten sind, heraus
 * und gibt das verbleibende Objekt zurück.
 *
 * @param {Object} object - Das Objekt, aus dem die Schlüssel entfernt werden sollen.
 * @param {Array<string>} keysToOmit - Eine Liste der Schlüsselnamen, die aus dem Objekt entfernt werden sollen.
 * @returns {Object} - Ein neues Objekt, das nur die Schlüssel enthält, die nicht in `keysToOmit` enthalten sind.
 */
export const omit = (object, keysToOmit) => {
  const result = {};
  
  for (const [key, value] of Object.entries(object)) {
    if (!keysToOmit.includes(key)) {
      result[key] = value;
    };
  };
  
  return result;
};

/**
 * Überprüft, ob das gegebene `theme` entweder 'light' oder 'dark' ist.
 * Diese Funktion gibt `true` zurück, wenn das `theme` eines der beiden gültigen Basis-Themen ist, andernfalls `false`.
 *
 * @param {string} theme - Das zu überprüfende Thema (z. B. 'light', 'dark' oder ein anderes).
 * @returns {boolean} - Gibt `true` zurück, wenn das Thema 'light' oder 'dark' ist, andernfalls `false`.
 */
export const isDefaultTheme = (theme) => [ 'light', 'dark' ].includes(theme);

/**
 * Erstellt ein Objekt mit Basis-Stilen, die auf den CSS-Variablen basieren.
 * Die `prefix`-Variable wird verwendet, um die Namen der CSS-Variablen für Hintergrund und Vordergrund dynamisch zu erstellen.
 *
 * @param {string} prefix - Das Präfix, das für die Erstellung der CSS-Variablen verwendet wird (z. B. 'light', 'dark').
 * @returns {object} - Ein Objekt mit den Basis-Stilen, das die CSS-Variablen für Hintergrund- und Vordergrundfarben enthält.
 */
export const baseStyles = (prefix) => ({
  backgroundColor: `hsl(var(--${prefix}-background))`,
  color: `hsl(var(--${prefix}-foreground))`,
});