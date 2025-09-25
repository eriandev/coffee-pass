const borderWidths = {
  none: 0,
  base: 1,
  lg: 2,
  xl: 4,
} as const

const borderRadius = {
  none: 0,
  base: 8,
  full: 999,
} as const

export const borders = {
  radius: borderRadius,
  width: borderWidths,
} as const

export const colors = {
  bg: {
    primary: '#F1DFBE',
    secondary: '#E5CEA2',
    input: '#F1F0E4',
    overlay: 'rgba(0,0,0,0.5)',
  },

  btn: {
    primary: {
      bg: '#989C56',
      text: '#FFFFFF',
      border: '#777935',
    },
    secondary: {
      bg: '#F2E3C6',
      text: '#61450F',
      border: '#B39A73',
    },
    ghost: {
      bg: 'transparent',
      text: '#61450F',
      border: 'transparent',
    },
  },

  border: {
    input: '#B39A73',
    card: '#B39A73',
  },

  text: {
    primary: '#61450F',
    secondary: '#7E612F',
    tertiary: '#A3A85E',
  },

  white: '#FFFFFF',
  black: '#06161C',
  transparent: 'transparent',
} as const

const fontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  title: 24,
  hero: 32,
} as const

export const fonts = {
  title: {
    fontWeight: 700,
    fontFamily: 'pt_serif_700',
  },
  bodyBold: {
    fontWeight: 700,
    fontFamily: 'nunito_700',
  },
  bodyBase: {
    fontWeight: 400,
    fontFamily: 'nunito_400',
  },
  sizes: fontSizes,
} as const
