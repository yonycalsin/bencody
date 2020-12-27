import { graphql } from 'gatsby';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { FeaturedListing, PostListing } from 'src/components';
import MainLayout from 'src/layout';
import config from 'src/utils/config';
import { languages } from 'src/utils/data';

const Home: FC<More> = (props) => {
   const { data, pageContext } = props;

   const postEdges = data.latest.edges;

   const isLanguagePage = !!pageContext.language;

   const title = pageContext.featured?.title ?? 'Programing Languages';

   const dataSource = pageContext.featured?.dataSource ?? languages;

   const prefixUrl = isLanguagePage
      ? `/language/${pageContext.language}/`
      : '/language/';

   return (
      <MainLayout>
         <Helmet title={config.siteTitle} />
         <FeaturedListing
            title={title}
            dataSource={dataSource}
            prefixUrl={prefixUrl}
         />
         <PostListing edges={postEdges} />
      </MainLayout>
   );
};

export default Home;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
   query ListingQuery($language: String) {
      latest: allMarkdownRemark(
         limit: 5
         sort: { fields: [frontmatter___date], order: DESC }
         filter: {
            frontmatter: {
               template: { eq: "post" }
               language: { eq: $language }
            }
         }
      ) {
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
