import {createTheme} from '@shopify/restyle';

const palette = {
  purpleBase: '#892CCD',
  purpleLight: '#A85FDD',

  gray100: '#0F0F1A',
  gray200: '#131320',
  gray300: '#1A1B2D',
  gray400: '#45455F',
  gray500: '#7A7B9F',
  gray600: '#B5B6C9',
  gray700: '#E4E5EC',

  white: '#FFFFFF',
};

const theme = createTheme({
  colors: palette,
  spacing: {
    s2: 2,
    s4: 4,
    s6: 6,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s18: 18,
    s20: 20,
    s22: 22,
    s24: 24,
  },
  borderRadii: {
    s4: 4,
    s6: 6,
    s8: 8,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;

export type ThemeColors = keyof Theme['colors'];

export default theme;
