import { graphql } from 'gatsby';
import { find, isEmpty } from 'lodash';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { FeaturedListing, PostListing, Typography } from 'src/components';
import MainLayout from 'src/layout';
import config from 'src/utils/config';
import dataSource from 'src/utils/data';

const { languages } = dataSource;

const Home: FC<More> = (props) => {
   const { data, pageContext } = props;

   const postEdges = data.latest.edges;

   const isLanguagePage = !!pageContext.language;

   const title = pageContext.featured?.title ?? 'Programing Languages';

   const dataSource = pageContext.featured?.dataSource ?? languages;

   const prefixUrl = isLanguagePage
      ? `/language/${pageContext.language}/library/`
      : '/language/';

   const hasEmpty = isEmpty(postEdges);

   const languageData = find(languages, { slug: pageContext.language });

   const libraryData = find(languageData?.libraries, {
      slug: pageContext.library,
   });

   const notFoundTitle = libraryData?.title ?? languageData?.title ?? '';

   return (
      <MainLayout>
         <Helmet title={config.siteTitle} />
         <FeaturedListing
            title={hasEmpty ? undefined : title}
            dataSource={hasEmpty ? [] : dataSource}
            prefixUrl={prefixUrl}
         />

         {hasEmpty ? (
            <Typography textStyle="h2Regular" textAlign="center" as="p">
               No{' '}
               <Typography
                  textStyle="h2Semibold"
                  style={{ fontSize: 'inherit' }}
                  color="primary"
               >
                  {notFoundTitle}
               </Typography>{' '}
               publications yet !
            </Typography>
         ) : (
            <PostListing edges={postEdges} />
         )}
      </MainLayout>
   );
};

export default Home;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
   query ListingQuery($language: String, $library: String) {
      latest: allMarkdownRemark(
         limit: 5
         sort: { fields: [frontmatter___date], order: DESC }
         filter: {
            frontmatter: {
               template: { eq: "post" }
               language: { eq: $language }
               library: { eq: $library }
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
