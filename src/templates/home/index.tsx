import { graphql } from 'gatsby';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { FeaturedListing, PostListing } from 'src/components';
import MainLayout from 'src/layout';
import config from 'src/utils/config';
import { languages } from 'src/utils/data';

const Home: FC<More> = (props) => {
   const { data } = props;

   const postEdges = data.latest.edges;

   return (
      <MainLayout>
         <Helmet title={config.siteTitle} />
         <FeaturedListing title="Programing Languages" dataSource={languages} />
         <PostListing edges={postEdges} />
      </MainLayout>
   );
};

export default Home;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
   query ListingQuery {
      latest: allMarkdownRemark(
         limit: 5
         sort: { fields: [frontmatter___date], order: DESC }
         filter: { frontmatter: { template: { eq: "post" } } }
      ) {
         edges {
            node {
               html
               excerpt
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
