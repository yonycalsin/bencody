import theme from 'src/utils/theme';
import 'styled-components';

type ITheme = typeof theme;

// and extend them!
declare module 'styled-components' {
   // eslint-disable-next-line @typescript-eslint/no-empty-interface
   export interface DefaultTheme extends ITheme {
      // More extra fields for default theme
   }
}

declare global {
   interface More<T = any> {
      [key: string]: T;
   }

   type Theme = {
      theme: ITheme;
   };
}
