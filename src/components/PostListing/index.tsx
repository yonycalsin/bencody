import { map } from 'lodash';
import React, { FC } from 'react';
import { Post } from 'src/components';
import { theme } from 'src/utils';
import styled from 'styled-components';

const Wrapper = styled.div`
   margin: ${theme.space(5, 0)};
`;

const OwnPost = styled(Post)`
   margin-bottom: 20px;
`;

interface Props {
   edges: More[];
}

const PostListing: FC<Props> = (props) => {
   const { edges } = props;

   return (
      <Wrapper>
         <div className="container">
            {map(edges, (edge, index) => (
               <OwnPost key={index} data={edge.node} />
            ))}
         </div>
      </Wrapper>
   );
};

export default PostListing;
