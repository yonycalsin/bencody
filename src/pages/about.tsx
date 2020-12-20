import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../data/SiteConfig';
import About from '../components/About/About';
import Layout from '../layout';

function AboutPage(): React.ReactElement {
   return (
      <Layout>
         <div className="about-container">
            <Helmet title={`About | ${config.siteTitle}`} />
            <About />
         </div>
      </Layout>
   );
}

export default AboutPage;
