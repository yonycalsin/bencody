import { Link } from 'gatsby';
import React from 'react';
import { theme } from 'src/utils';
import styled from 'styled-components';
import { Space, Typography } from '..';
import UserLinks from '../UserLinks/UserLinks';

const Wrapper = styled.div`
   padding: ${theme.space(10, 0, 15)};
`;

const menuLinks = [
   {
      name: 'Use Cases',
      link: '/muse-cases',
   },
   {
      name: 'Contribute',
      link: '/contribute',
   },
];

function Footer({ config }: More): React.ReactElement | null {
   const { copyright } = config;

   if (!copyright) {
      return null;
   }

   const renderMenu = () =>
      menuLinks.map((link) => (
         <Link key={link.name} to={link.link}>
            {link.name}
         </Link>
      ));

   return (
      <Wrapper>
         <div className="container">
            <Space
               direction="vertical"
               style={{ width: '100%' }}
               align="center"
               size="large"
            >
               <Space className="fx-jcc">{renderMenu()}</Space>

               <Typography textStyle="h4Bold" as="p" className="tac">
                  {copyright}
               </Typography>

               <Typography
                  textStyle="h5Bold"
                  color="gray-500"
                  as="p"
                  className="tac"
               >
                  Created by{' '}
                  <a
                     href={config.author.url}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Yony Calsin
                  </a>
               </Typography>

               <div className="tac">
                  <UserLinks config={config} labeled />
               </div>
            </Space>
         </div>
      </Wrapper>
   );
}

export default Footer;
