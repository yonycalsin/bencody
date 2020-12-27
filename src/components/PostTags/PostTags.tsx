import { Link } from 'gatsby';
import _ from 'lodash';
import React, { FC } from 'react';
import { Space } from '..';

interface Props {
   tags: string[];
}

const PostTags: FC<Props> = (props) => {
   const { tags } = props;

   const renderAll = () =>
      tags &&
      tags.map((tag) => (
         <Link
            key={tag}
            style={{ textDecoration: 'none' }}
            to={`/tags/${_.kebabCase(tag)}`}
         >
            <button type="button">{tag}</button>
         </Link>
      ));

   return <Space>{renderAll()}</Space>;
};

export default PostTags;
