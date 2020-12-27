import React from 'react';
import { Helmet } from 'react-helmet';
import { Footer, Navbar } from 'src/components';
import { theme } from 'src/utils';
import config from 'src/utils/config';
import { ThemeProvider } from 'styled-components';
import '../styles/main.scss';

function MainLayout({ children }: More): React.ReactElement {
   return (
      <ThemeProvider theme={theme}>
         <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
         </Helmet>
         <Navbar />
         {children}
         <Footer config={config} />
      </ThemeProvider>
   );
}

export default MainLayout;
