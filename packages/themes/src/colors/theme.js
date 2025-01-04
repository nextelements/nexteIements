import { swap } from '../utils'
import { common } from './common'

const defaultLightThemeColors = {
  layout: {
    background: '#ffffff',
    foreground: '#000000',
    divider: 'rgba(0, 0, 0, .15)',
    overlay: '#000000',
  },
  colors: {
    default: {
      ...common.neutral,
      foreground: common.neutral[500],
      DEFAULT: common.neutral[100],
    },
    primary: {
      ...common.sky,
      foreground: common.sky[500],
      DEFAULT: common.sky[100],
    },
    secondary: {
      ...common.purple,
      foreground: common.purple[500],
      DEFAULT: common.purple[100],
    },
    success: {
      ...common.green,
      foreground: common.green[500],
      DEFAULT: common.green[100],
    },
    warning: {
      ...common.orange,
      foreground: common.orange[500],
      DEFAULT: common.orange[100],
    },
    danger: {
      ...common.red,
      foreground: common.red[500],
      DEFAULT: common.red[100],
    },
  }
}

const defaultDarkThemeColors = {
  layout: {
    background: '#000000',
    foreground: '#ffffff',
    divider: 'rgba(255, 255, 255, .3)',
    overlay: '#000000',
  },
  colors: {
    default: {
      ...swap(common.neutral),
      foreground: common.neutral[500],
      DEFAULT: common.neutral[100],
    },
    primary: {
      ...swap(common.sky),
      foreground: common.sky[500],
      DEFAULT: common.sky[100],
    },
    secondary: {
      ...swap(common.purple),
      foreground: common.purple[500],
      DEFAULT: common.purple[100],
    },
    success: {
      ...swap(common.green),
      foreground: common.green[500],
      DEFAULT: common.green[100],
    },
    warning: {
      ...swap(common.orange),
      foreground: common.orange[500],
      DEFAULT: common.orange[100],
    },
    danger: {
      ...swap(common.red),
      foreground: common.red[500],
      DEFAULT: common.red[100],
    },
  }
}

export const defaultThemes = {
  light: defaultLightThemeColors,
  dark: defaultDarkThemeColors
}