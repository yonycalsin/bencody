import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../data/SiteConfig';
import PostListing from '../components/PostListing/PostListing';
import Layout from '../layout';

export default function CategoryTemplate({ pageContext, data }) {
   const { category } = pageContext;
   const postEdges = data.allMarkdownRemark.edges;
   return (
      <Layout>
         <div className="category-container">
            <Helmet
               title={`Posts in category "${category}" | ${config.siteTitle}`}
            />
            <PostListing postEdges={postEdges} />
         </div>
      </Layout>
   );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
   query CategoryPage($category: String) {
      allMarkdownRemark(
         limit: 1000
         sort: { fields: [fields___date], order: DESC }
         filter: { frontmatter: { category: { eq: $category } } }
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
