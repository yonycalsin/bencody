import { Link } from 'gatsby';
import { find } from 'lodash';
import React, { FC } from 'react';
import { Avatar, Typography } from 'src/components';
import { theme } from 'src/utils';
import dataSource from 'src/utils/data';
import styled from 'styled-components';

const { languages } = dataSource;

const Wrapper = styled.header`
   padding: ${theme.space(1, 2)};
`;

interface Props {
   data: More;
}

const Header: FC<Props> = (props) => {
   const { data } = props;

   const { frontmatter, fields } = data;

   const image = find(languages, { slug: frontmatter.language })?.image;

   return (
      <Wrapper className="fx fx-aic fx-jcsb">
         <Link to={fields.slug}>
            <Typography color="gray-800" textStyle="h4Bold" as="h1" ellipsis>
               {frontmatter.title}
            </Typography>
         </Link>

         <Avatar image={image} shape="square" objectFit="contain" size={3} />
      </Wrapper>
   );
};

export default Header;
