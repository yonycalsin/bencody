import { Link } from 'gatsby';
import React, { FC } from 'react';
import { Typography } from 'src/components';
import { theme } from 'src/utils';
import styled from 'styled-components';

const Wrapper = styled.header`
   padding: ${theme.space(1, 2)};
`;

interface Props {
   data: More;
}

const Header: FC<Props> = (props) => {
   const { data } = props;

   const { frontmatter, fields } = data;

   return (
      <Wrapper>
         <Link to={fields.slug}>
            <Typography color="gray-800" textStyle="h4Bold" as="h1" ellipsis>
               {frontmatter.title}
            </Typography>
         </Link>
      </Wrapper>
   );
};

export default Header;
