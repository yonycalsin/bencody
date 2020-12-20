import { Link } from 'gatsby';
import _ from 'lodash';
import React from 'react';

function PostTags({ tags }) {
   return (
      <div className="post-tag-container">
         {tags &&
            tags.map((tag) => (
               <Link
                  key={tag}
                  style={{ textDecoration: 'none' }}
                  to={`/tags/${_.kebabCase(tag)}`}
               >
                  <button type="button">{tag}</button>
               </Link>
            ))}
      </div>
   );
}

export default PostTags;
