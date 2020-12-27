import React, { FC } from 'react';
import styled from 'styled-components';
import { Footer, Header } from './components';

const Wrapper = styled.article`
   background: ${(props) => props.theme.colors.white};
   border-radius: 7px;

   border: 1px solid #eee;

   pre[class*='language-'] {
      margin: 0;
   }
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   data: More;
}

const Post: FC<Props> = (props) => {
   const { data, ...rest } = props;

   return (
      <Wrapper {...rest}>
         <Header data={data} />
         <div
            dangerouslySetInnerHTML={{
               __html: data.excerpt,
            }}
         ></div>
         <Footer data={data} />
      </Wrapper>
   );
};

export default Post;
