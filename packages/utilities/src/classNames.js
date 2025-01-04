import { twMerge } from 'tailwind-merge'

/**
 * Kombiniert mehrere CSS-Klassennamen basierend auf verschiedenen Eingabetypen.
 * Unterstützt Strings, Arrays und Objekte. Die resultierenden Klassennamen
 * werden durch Leerzeichen getrennt zurückgegeben.
 *
 * @param {...(string|Array|Object)} args - Eine Liste von Eingabewerten, die kombiniert werden sollen.
 *   - `string`: Ein String wird direkt als Klassennamen verwendet.
 *   - `Array`: Ein Array von Strings wird rekursiv bearbeitet.
 *   - `Object`: Ein Objekt, bei dem nur die Schlüssel, deren Werte `true` sind, als Klassen hinzugefügt werden.
 * @returns {string} Eine zusammengeführte Zeichenkette von CSS-Klassennamen.
 */

const cx = (...args) => {
  return args
    .map((arg) => {
      if (typeof arg === 'string') {
        return arg;
      }

      if (Array.isArray(arg)) {
        return cx(...arg);
      }

      if (typeof arg === 'object') {
        return Object.keys(arg)
          .filter((key) => arg[key])
          .join(' ');
      }

      return '';
    })
    .join(' ');
};

/**
 * Kombiniert mehrere CSS-Klassennamen, wobei alle Eingaben durch die cx-Funktion verarbeitet
 * und mit twMerge kombiniert werden, um doppelte oder überschüssige TailwindCSS-Klassen zu entfernen.
 *
 * @param {...(string|Array|Object)} args - Eine Liste von Eingabewerten, die kombiniert werden sollen.
 *   - `string`: Ein String wird direkt als Klassennamen verwendet.
 *   - `Array`: Ein Array von Strings wird rekursiv bearbeitet.
 *   - `Object`: Ein Objekt, bei dem nur die Schlüssel, deren Werte `true` sind, als Klassen hinzugefügt werden.
 * @returns {string} Eine zusammengeführte und bereinigte Zeichenkette von CSS-Klassennamen, bei der doppelte Klassen entfernt wurden.
 */

const classNames = (...args) => {
  return twMerge(cx(...args))
};

export { classNames }