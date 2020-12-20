import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import config from 'src/utils/config';
import PostListing from '../components/PostListing/PostListing';
import Layout from '../layout';

export default function TagTemplate({
   pageContext,
   data,
}: More): React.ReactElement {
   const { tag } = pageContext;
   const postEdges = data.allMarkdownRemark.edges;
   return (
      <Layout>
         <div className="tag-container">
            <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
            <PostListing postEdges={postEdges} />
         </div>
      </Layout>
   );
}

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
