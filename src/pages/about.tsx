import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import config from 'src/utils/config';
import About from '../components/About/About';
import Layout from '../layout';

const AboutPage: FC = () => {
   return (
      <Layout>
         <div className="about-container">
            <Helmet title={`About | ${config.siteTitle}`} />
            <div className="container">
               <About />
            </div>
         </div>
      </Layout>
   );
};

export default AboutPage;
