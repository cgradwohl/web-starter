const colors = {
  black: 'hsl(0, 0%, 4%)',
  blackBis: 'hsl(0, 0%, 7%)',
  blackTer: 'hsl(0, 0%, 14%)',
  greyDarker: 'hsl(0, 0%, 21%)',
  greyDark: 'hsl(0, 0%, 29%)',
  grey: 'hsl(0, 0%, 48%)',
  greyLight: 'hsl(0, 0%, 71%)',
  greyLighter: 'hsl(0, 0%, 86%)',
  whiteTer: 'hsl(0, 0%, 96%)',
  whiteBis: 'hsl(0, 0%, 98%)',
  white: 'hsl(0, 0%, 100%)',
  orange: 'hsl(14, 100%, 53%)',
  yellow: 'hsl(48, 100%, 67%)',
  green: 'hsl(141, 71%, 48%)',
  turquoise: 'hsl(171, 100%, 41%)',
  cyan: 'hsl(204, 86%, 53%)',
  blue: 'hsl(217, 71%, 53%)',
  purple: 'hsl(271, 100%, 71%)',
  red: 'hsl(348, 100%, 61%)',
};

export default {
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  colors: {
    primary: colors.turquoise,
    secondary: colors.purple,
    info: colors.cyan,
    success: colors.green,
    warning: colors.yellow,
    danger: colors.red,
    light: colors.whiteTer,
    dark: colors.greyDarker,
  },
  fonts: {
    main: 'Oxygen, sans-serif',
  },
  fontSizes: [2, 4, 8, 12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};