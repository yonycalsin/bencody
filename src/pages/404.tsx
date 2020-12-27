import React, { FC } from 'react';
import { Typography } from 'src/components';
import MainLayout from 'src/layout';
import { theme } from 'src/utils';
import styled from 'styled-components';

const Wrapper = styled.div`
   padding: ${theme.space(15, 0)};
`;

const PageNotFound: FC<More> = (props) => {
   const { location } = props;

   return (
      <MainLayout>
         <Wrapper>
            <div className="container">
               <Typography textStyle="h1Bold" className="tac" as="h1">
                  Page{' '}
                  <Typography
                     style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
                     color="primary"
                  >
                     {location.pathname}
                  </Typography>{' '}
                  not found 😥
               </Typography>
            </div>
         </Wrapper>
      </MainLayout>
   );
};

export default PageNotFound;
