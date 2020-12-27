import { graphql } from 'gatsby';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import config from 'src/utils/config';
import PostListing from '../components/PostListing';
import Layout from '../layout';

const CategoryTemplate: FC<More> = (props) => {
   const { pageContext, data } = props;

   const { category } = pageContext;

   const postEdges = data.allMarkdownRemark.edges;

   return (
      <Layout>
         <div className="category-container">
            <Helmet
               title={`Posts in category "${category}" | ${config.siteTitle}`}
            />
            <PostListing edges={postEdges} />
         </div>
      </Layout>
   );
};

export default CategoryTemplate;

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
               excerpt(format: HTML)
               timeToRead
               fields {
                  slug
                  date
                  dateFormated: date(formatString: "MMMM DD, YYYY")
               }
               frontmatter {
                  title
                  tags
                  cover
                  date
                  language
                  template
                  author
               }
            }
         }
      }
   }
`;
