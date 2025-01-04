import React from 'react';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

// Extend oder überschreibe die Varianten einer Komponente nur bei bestimmtem displayName-Präfix
export function extendVariant(Component, variantsToExtend, mergeClasses = true, prefix = 'NextElements') {
  // Überprüfe, ob das displayName den gewünschten Präfix enthält
  if (!Component.displayName || !Component.displayName.startsWith(prefix)) {
    console.warn(`Komponente '${Component.displayName}' hat nicht den erwarteten Prefix '${prefix}' und wird ignoriert.`);
    return Component;
  }

  const extendedVariants = {
    ...Component.variants,
    ...variantsToExtend,
  };

  // Gibt eine Funktion zurück, die eine Komponente mit erweiterten Varianten erzeugt
  const extendedComponent = (props) => {
    // Wende die Varianten an, die durch den Funktionsaufruf (`button({ variant, size, color })`) gesetzt werden
    const variantClasses = tv(extendedVariants)(props);

    // Wenn twMerge aktiviert ist, kombinieren wir die Klassen
    const mergedClasses = mergeClasses ? twMerge(props.className, variantClasses) : variantClasses;

    // Übergib die mergeClass zu den props als `className`
    return <Component {...props} className={mergedClasses} />;
  };

  // Setze den displayName der neuen Funktion
  extendedComponent.displayName = `Extended.${Component.displayName}`;

  return extendedComponent;
}
