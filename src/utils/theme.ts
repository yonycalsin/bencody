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
   white: '#ffffff',
};

export type IShape = keyof typeof shapes;

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
   };
};

const theme = createTheme();

export default theme;
