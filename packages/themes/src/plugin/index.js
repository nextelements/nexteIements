import Color from 'color';
import plugin from 'tailwindcss/plugin';
import { defaultThemes } from '../colors/theme';
import { 
  isDefaultTheme, 
  deepmerge, 
  flattenObject,
  flattenToObject,
  omit
} from '../utils';

const cache = {};

const resolveConfig = (
  themes,
  defaultTheme,
  prefix
) => {
  const resolved = {
    colors: {},
    utilities: {},
  };

  const process = (prefix, itemName, itemValue, resolved, cssSelector) => {
    if (!itemValue) return;
    
    const toVariable = (str) => str.replaceAll(/\.|-DEFAULT/g, (match) => match === '.' ? '-' : '');

    if (typeof itemValue === 'object' && !Array.isArray(itemValue)) {
      for (const [nestedItemName, nestedItemValue] of Object.entries(itemValue)) {
        process(toVariable(`${itemName}.${nestedItemName}`), nestedItemValue);
      }
      return;
    }

    try {
      const parsedColor = cache[itemValue] || Color(itemValue).hsl().array();
      cache[itemValue] = parsedColor;
  
      const color = toVariable(itemName);
      const colorVariable = `--${prefix}-${color}`;
      const colorOpacityVariable = `${colorVariable}-o`;
      const [h, s, l, alpha] = parsedColor;
  
      resolved.utilities[cssSelector][colorVariable] = `${h} ${s}% ${l}%`;
  
      if (typeof alpha === 'number') {
        resolved.utilities[cssSelector][colorOpacityVariable] = alpha.toFixed(2);
      }
  
      resolved.colors[color] = ({ opacityVariable, opacityValue }) => {
        if (!isNaN(+opacityValue)) {
          return `hsl(var(${colorVariable}) / ${opacityValue})`;
        }
        if (opacityVariable) {
          return `hsl(var(${colorVariable}) / var(${colorOpacityVariable}, var(${opacityVariable})))`;
        }
        return `hsl(var(${colorVariable}) / var(${colorOpacityVariable}, 1))`;
      };
    } catch (e) {
      console.error(`Error processing ${itemName}: ${e.message}`);
    }
  };

  for (const [themeName, themeProperties] of Object.entries(themes)) {
    const scheme = isDefaultTheme(themeName) ? themeName : extend;
    const { extend, ...props } = themeProperties;

    let cssSelector = `.${themeName}:root, [data-theme="${themeName}"]:root`;

    if(themeName === defaultTheme) {
      cssSelector = `:root, ${cssSelector}`;
    }

    resolved.utilities[cssSelector] = { 
      'color-scheme': scheme 
    } || {};

    for (const [key, property] of Object.entries(props)) {
      const flattenObj = flattenObject(property ? property : {});
      for (const [name, value] of Object.entries(flattenObj)) {
        process(prefix, name, value, resolved, cssSelector);
      }
    }
  }
  
  return resolved;
};

export const NextElements = (config) => {
  const prefix = config?.prefix || 'myapp';
  const defaultTheme = config?.defaultTheme || 'light';
  const defaultExtendTheme = config?.defaultExtendTheme || 'light';

  const themes = deepmerge(defaultThemes, config?.themes);
  const customThemes = omit(themes, [ 'dark', 'light' ]);

  for (const [themeName, { colors, layout, extend }] of Object.entries(customThemes)) {
    if(!colors && !layout) {
      return false;
    }

    const defaultExtendColors = defaultThemes[extend]?.colors || defaultThemes[defaultExtendTheme]?.colors || {};
    const defaultExtendLayouts = defaultThemes[extend]?.layout ||  defaultThemes[defaultExtendTheme]?.layout || {};

    themes[themeName] = {
      layout: {
        ...defaultExtendLayouts,
        ...layout,
      },
      colors: {
        ...defaultExtendColors,
        ...colors,
      },
      ...themes[themeName]
    };
  }

  const resolved = resolveConfig(themes, defaultTheme, prefix);
  
  return plugin(({ e, addUtilities, addVariant }) => {
    Object.keys(customThemes).map((themeName) => {
      addVariant(themeName, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
            return `.${e(`${themeName}${separator}${className}`) + `:is(.${e(themeName)} *)`}`;
        });
      });
    });
    addUtilities(
      { 
        ...resolved?.utilities
      }, 
      [ 
        'responsive',
        'hover'
      ]
    );
  }, { 
    theme: {
      extend: {
        colors: {
          ...flattenToObject(resolved?.colors)
        },
        variants: {
          extend: {
            ...resolved?.variants
          }
        }
      }
    }
  });
};
