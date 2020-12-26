const factors = {
   darken: 0.03,
   darkness: 0.05,
   transparentize: 0.6,
};

const shapes = {
   square: '0',
   rounded: '4px',
   circle: '50%',
};

const colors = {
   transparent: 'transparent',

   // Up Colors
   white: '#fff',
   'gray-100': '#f8f9fa',
   'gray-200': '#e9ecef',
   'gray-300': '#dee2e6',
   'gray-400': '#ced4da',
   'gray-500': '#adb5bd',
   'gray-600': '#6c757d',
   'gray-700': '#495057',
   'gray-800': '#343a40',
   'gray-900': '#212529',
   black: '#000',

   // Colors
   blue: '#1d8bff',
   indigo: '#6610f2',
   purple: '#6f42c1',
   pink: '#d63384',
   red: '#ff2d55',
   orange: '#fd7e14',
   yellow: '#ffe200',
   green: '#32d673',
   teal: '#20c997',
   cyan: '#0dcaf0',

   // --
   primary: '#00d1b2',
};

const textStyles = {
   h1Bold: { lineHeight: 75, size: 50, weight: 700 },
   h2Bold: { lineHeight: 56, size: 37, weight: 700 },
   h3Bold: { lineHeight: 42, size: 28, weight: 700 },
   h4Bold: { lineHeight: 32, size: 21, weight: 700 },
   h5Bold: { lineHeight: 24, size: 16, weight: 700 },
   h6Bold: { lineHeight: 18, size: 12, weight: 700 },
   h1Semibold: { lineHeight: 75, size: 50, weight: 600 },
   h2Semibold: { lineHeight: 56, size: 37, weight: 600 },
   h3Semibold: { lineHeight: 42, size: 28, weight: 600 },
   h4Semibold: { lineHeight: 32, size: 21, weight: 600 },
   h5Semibold: { lineHeight: 24, size: 16, weight: 600 },
   h6Semibold: { lineHeight: 18, size: 12, weight: 600 },
   h1Regular: { lineHeight: 75, size: 50, weight: 400 },
   h2Regular: { lineHeight: 56, size: 37, weight: 400 },
   h3Regular: { lineHeight: 42, size: 28, weight: 400 },
   h4Regular: { lineHeight: 32, size: 21, weight: 400 },
   h5Regular: { lineHeight: 24, size: 16, weight: 400 },
   h6Regular: { lineHeight: 18, size: 12, weight: 400 },
};

export type IShape = keyof typeof shapes;

export type IColors = keyof typeof colors;

export type ITextStyles = keyof typeof textStyles;

const createTheme = () => {
   const space = (...args: (string | number)[]) => {
      return args
         .map((item) => (typeof item === 'string' ? item : `${8 * item}px`))
         .join(' ');
   };

   return {
      factors,
      shapes,
      colors,
      space,
      textStyles,
   };
};

const theme = createTheme();

export default theme;
