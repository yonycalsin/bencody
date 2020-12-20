import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import config from 'src/utils/config';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import Layout from '../layout';

function Landing({ data }: More): React.ReactElement {
   const postEdges = data.allMarkdownRemark.edges;
   return (
      <Layout>
         <div className="landing-container">
            <div className="posts-container">
               <Helmet title={config.siteTitle} />
               <SEO />
               <PostListing postEdges={postEdges} />
            </div>
         </div>
      </Layout>
   );
}

export default Landing;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
   query LandingQuery {
      allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
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
