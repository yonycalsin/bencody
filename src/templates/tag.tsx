import { graphql } from 'gatsby';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import config from 'src/utils/config';
import PostListing from '../components/PostListing';
import Layout from '../layout';

const TagTemplate: FC<More> = (props) => {
   const { pageContext, data } = props;

   const { tag } = pageContext;

   const postEdges = data.allMarkdownRemark.edges;

   return (
      <Layout>
         <div className="tag-container">
            <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
            <PostListing edges={postEdges} />
         </div>
      </Layout>
   );
};

export default TagTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
   query TagPage($tag: String) {
      allMarkdownRemark(
         limit: 1000
         sort: { fields: [fields___date], order: DESC }
         filter: { frontmatter: { tags: { in: [$tag] } } }
      ) {
         totalCount
         edges {
            node {
               fields {
                  slug
                  date
               }
               excerpt
               timeToRead
               frontmatter {
                  title
                  tags
                  cover
                  date
               }
            }
         }
      }
   }
`;
