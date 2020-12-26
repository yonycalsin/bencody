import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/utils';
import GlobalStyle from 'src/components/GlobalStyle';
import 'flexbox-fast/index.css';
import 'scroll-style/index.css';

export const wrapRootElement = ({ element }) => (
   <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
   </ThemeProvider>
);
