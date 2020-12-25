import React from 'react';
import { Helmet } from 'react-helmet';
import { Navbar } from 'src/components';
import config from 'src/utils/config';
import '../styles/main.scss';

function MainLayout({ children }: More): React.ReactElement {
   return (
      <>
         <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
         </Helmet>
         <Navbar />

         {children}
      </>
   );
}

export default MainLayout;
