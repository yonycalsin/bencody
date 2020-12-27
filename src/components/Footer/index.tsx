import { Link } from 'gatsby';
import React from 'react';
import { theme } from 'src/utils';
import styled from 'styled-components';
import { Typography } from '..';
import UserLinks from '../UserLinks/UserLinks';

const Wrapper = styled.div`
   padding: ${theme.space(5, 0)};
   background: ${(props) => props.theme.colors['gray-900']};
`;

function Footer({ config }: More): React.ReactElement | null {
   const url = config.siteRss;

   const { copyright } = config;

   if (!copyright) {
      return null;
   }

   return (
      <Wrapper>
         <div className="container">
            <UserLinks config={config} labeled />
            <div className="notice-container">
               <Typography color="white" textStyle="h5Bold" as="p">
                  {copyright}
               </Typography>

               <Link to={url}>
                  <button type="button">Subscribe</button>
               </Link>
               <h4>
                  Based on{' '}
                  <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
                     Gatsby Advanced Starter
                  </a>
                  .
               </h4>
            </div>
         </div>
      </Wrapper>
   );
}

export default Footer;
