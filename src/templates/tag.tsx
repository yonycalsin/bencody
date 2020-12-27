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
         <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
         <div className="container">
            <h1 className="tac">Posts tagged as {`"${tag}"`} </h1>
         </div>
         <PostListing edges={postEdges} />
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
