import Color from 'color'
import plugin from 'tailwindcss/plugin'
import { defaultThemes } from '../colors/theme'
import { 
  isDefaultTheme, 
  deepmerge, 
  flattenObject,
  flattenToObject,
  omit
} from '../utils'

const cache = {}

const resolveConfig = (
  themes,
  defaultTheme,
  prefix
) => {
  const resolved = {
    colors: {},
    utilities: {},
  }

  for (const [ themeName, { colors, layout, extend }] of Object.entries(themes)) {
    const scheme = isDefaultTheme(themeName) ? themeName : extend
    let cssSelector = `.${themeName}:root, [data-theme="${themeName}"]:root`

    const flattenLayouts = flattenObject(layout ? layout : {})
    const flattenColors = flattenObject(colors ? colors : {})

    if(themeName === defaultTheme) {
      cssSelector = `:root, ${cssSelector}`
    }

    resolved.utilities[cssSelector] = { 
      'color-scheme': scheme 
    } || {}

    for (const [ colorName, colorValue ] of Object.entries(flattenColors)) {
      if(!colorValue) {
        return
      }
      try {
        const parsedColor = cache[colorValue] || Color(colorValue).hsl().array()
        cache[colorValue] = parsedColor

        const color = colorName.replace('.', '-').replace('-DEFAULT', '')
        const colorVariable = `--${prefix}-${color}`
        const colorOpacityVariable = `${colorVariable}-o`
        const [ h, s, l, alpha ] = parsedColor

        resolved.utilities[cssSelector][colorVariable] = `${h} ${s}% ${l}%`

        if(typeof alpha === 'number') {
          resolved.utilities[cssSelector][colorOpacityVariable] = alpha.toFixed(2)
        }

        resolved.colors[color] = ({ opacityVariable, opacityValue }) => {
          if (!isNaN(+opacityValue)) {
            return `hsl(var(${colorVariable}) / ${opacityValue})`
          }
          if (opacityVariable) {
            return `hsl(var(${colorVariable}) / var(${colorOpacityVariable}, var(${opacityVariable})))`
          }
          return `hsl(var(${colorVariable}) / var(${colorOpacityVariable}, 1))`
        }
      } catch (e) {
        console.error('error', e.message)
      }
    }

    for (const [ layoutName, layoutValue ] of Object.entries(flattenLayouts)) {
      if(!layoutValue) {
        return
      }
      try {
        const parsedColor = cache[layoutValue] || Color(layoutValue).hsl().array()
        cache[layoutValue] = parsedColor

        const color = layoutName.replace('.', '-')
        const colorVariable = `--${prefix}-${color}`
        const colorOpacityVariable = `${colorVariable}-o`
        const [ h, s, l, alpha ] = parsedColor

        resolved.utilities[cssSelector][colorVariable] = `${h} ${s}% ${l}%`

        if(typeof alpha === 'number') {
          resolved.utilities[cssSelector][colorOpacityVariable] = alpha.toFixed(2)
        }

        resolved.colors[color] = ({ opacityVariable, opacityValue }) => {
          if (!isNaN(+opacityValue)) {
            return `hsl(var(${colorVariable}) / ${opacityValue})`
          }
          if (opacityVariable) {
            return `hsl(var(${colorVariable}) / var(${colorOpacityVariable}, var(${opacityVariable})))`
          }
          return `hsl(var(${colorVariable}) / var(${colorOpacityVariable}, 1))`
        }
      } catch (e) {
        console.error('error', e.message)
      }
    }
  }
  return resolved
}

export const NextElements = (config) => {
  const prefix = config?.prefix || 'myapp'
  const defaultTheme = config?.defaultTheme || 'light'
  const defaultExtendTheme = config?.defaultExtendTheme || 'light'

  const themes = deepmerge(defaultThemes, config?.themes)
  const customThemes = omit(themes, [ 'dark', 'light' ])

  for (const [ themeName, { colors, layout, extend } ] of Object.entries(customThemes)) {
    if(!colors && !layout) {
      return false
    }

    const defaultExtendColors = defaultThemes[extend]?.colors || defaultThemes[defaultExtendTheme]?.colors || {}
    const defaultExtendLayouts = defaultThemes[extend]?.layout ||  defaultThemes[defaultExtendTheme]?.layout || {}

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
    }
  }

  const resolved = resolveConfig(themes, defaultTheme, prefix)
  
  return plugin(({ e, addUtilities, addVariant }) => {
    Object.keys(customThemes).map((themeName) => {
      addVariant(themeName, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`${themeName}${separator}${className}`) + `:is(.${themeName} *)`}`
        })
      })
    })
    addUtilities({ ...resolved?.utilities }, ['responsive', 'hover'])
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
  })
}

