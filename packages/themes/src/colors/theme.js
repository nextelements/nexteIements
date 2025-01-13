import { swap } from '../utils'
import { common } from './common'

const defaultLightThemeColors = {
  layout: {
    background: '#fafafa',
    foreground: '#4b5563',
    divider: '#e7e7e7',
    overlay: '#000000',
    shadow: '#000000',
    content: {
      1: '#ffffff',
      2: '#f3f4f6' 
    },
    link: {
      DEFAULT: '#6b7280',
      hover: '#202327',
      active: {
        DEFAULT: '#000000',
        light: '#f0f0f0'
      }
    }
  },
  colors: {
    default: {
      ...common.neutral,
      foreground: common.neutral[500],
      DEFAULT: common.black,
    },
    muted: {
      ...common.zinc,
      foreground: common.zinc[500],
      DEFAULT: common.zinc[500],
    },
    primary: {
      ...common.blue,
      foreground: common.blue[500],
      DEFAULT: common.blue[500],
    },
    secondary: {
      ...common.purple,
      foreground: common.purple[500],
      DEFAULT: common.purple[500],
    },
    success: {
      ...common.emerald,
      foreground: common.green[500],
      DEFAULT: common.green[500],
    },
    warning: {
      ...common.orange,
      foreground: common.orange[500],
      DEFAULT: common.orange[500],
    },
    danger: {
      ...common.rose,
      foreground: common.rose[500],
      DEFAULT: common.rose[500],
    },
  }
}

const defaultDarkThemeColors = {
  layout: {
    background: '#0a0a0a',
    foreground: '#f1f5f9',
    divider: '#2a2a2a',
    overlay: '#000000',
    shadow: '#000000',
    content: {
      1: '#000000',
      2: '#0f0f0f'
    },
    link: {
      DEFAULT: '#a3a3a3',
      hover: '#f1f5f9',
      active: {
        DEFAULT: '#ffffff',
        light: '#0f0f0f'
      }
    }
  },
  colors: {
    default: {
      ...swap(common.neutral),
      foreground: common.neutral[500],
      DEFAULT: common.white,
    },
    muted: {
      ...swap(common.zinc),
      foreground: common.zinc[500],
      DEFAULT: common.zinc[500],
    },
    primary: {
      ...swap(common.sky),
      foreground: common.sky[500],
      DEFAULT: common.sky[500],
    },
    secondary: {
      ...swap(common.purple),
      foreground: common.purple[500],
      DEFAULT: common.purple[500],
    },
    success: {
      ...swap(common.green),
      foreground: common.green[500],
      DEFAULT: common.green[500],
    },
    warning: {
      ...swap(common.orange),
      foreground: common.orange[500],
      DEFAULT: common.orange[500],
    },
    danger: {
      ...swap(common.red),
      foreground: common.red[500],
      DEFAULT: common.red[500],
    },
  }
}

export const defaultThemes = {
  light: defaultLightThemeColors,
  dark: defaultDarkThemeColors
}