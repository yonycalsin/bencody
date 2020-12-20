import { graphql, Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../data/SiteConfig';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import Layout from '../layout';
import './listing.css';

function Listing({ pageContext, data }: More): React.ReactElement {
   function renderPaging() {
      const { currentPageNum, pageCount } = pageContext;
      const prevPage =
         currentPageNum - 1 === 1 ? '/' : `/${currentPageNum - 1}/`;
      const nextPage = `/${currentPageNum + 1}/`;
      const isFirstPage = currentPageNum === 1;
      const isLastPage = currentPageNum === pageCount;

      return (
         <div className="paging-container">
            {!isFirstPage && <Link to={prevPage}>Previous</Link>}
            {[...Array(pageCount)].map((_val, index) => {
               const pageNum = index + 1;
               return (
                  <Link
                     key={`listing-page-${pageNum}`}
                     to={pageNum === 1 ? '/' : `/${pageNum}/`}
                  >
                     {pageNum}
                  </Link>
               );
            })}
            {!isLastPage && <Link to={nextPage}>Next</Link>}
         </div>
      );
   }

   const postEdges = data.latest.edges;

   console.log(data);

   return (
      <Layout>
         <div className="listing-container">
            <div className="posts-container">
               <Helmet title={config.siteTitle} />
               <SEO />
               <PostListing postEdges={postEdges} />
            </div>
            {renderPaging()}
         </div>
      </Layout>
   );
}

export default Listing;

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
               }
            }
         }
      }
   }
`;
