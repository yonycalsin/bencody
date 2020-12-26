import React, { FC } from 'react';
import { Avatar, Space, Typography } from 'src/components';
import { theme } from 'src/utils';
import styled from 'styled-components';

const Wrapper = styled.footer`
   padding: ${theme.space(1, 2)};
`;

interface Props {
   data: More;
}

const Footer: FC<Props> = (props) => {
   const { data } = props;

   const { frontmatter, fields } = data;

   const username = frontmatter.author;

   return (
      <Wrapper>
         <div className="fx fx-aic fx-jcsb">
            <a
               href={`https://github.com/${username}`}
               target="_blank"
               rel="noopener noreferrer"
            >
               <Space>
                  <Avatar image={`https://github.com/${username}.png`} />
                  <Typography textStyle="h5Bold" color="gray-600">
                     {username}
                  </Typography>
               </Space>
            </a>
            <Typography color="gray-600" textStyle="h6Regular">
               {fields.dateFormated}
            </Typography>
         </div>
      </Wrapper>
   );
};

export default Footer;
