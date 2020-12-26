import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/utils';

export const wrapRootElement = ({ element }) => (
   <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
