import React from 'react';
import { Helmet } from 'react-helmet';
import config from 'src/utils/config';
import '../styles/main.scss';

export default function MainLayout({ children }: More): React.ReactElement {
   return (
      <div className="layout-container">
         <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
         </Helmet>
         {children}
      </div>
   );
}
