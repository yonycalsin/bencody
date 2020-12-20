import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import config from 'src/utils/config';
import Disqus from '../components/Disqus/Disqus';
import Footer from '../components/Footer/Footer';
import PostTags from '../components/PostTags/PostTags';
import SEO from '../components/SEO/SEO';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import UserInfo from '../components/UserInfo/UserInfo';
import Layout from '../layout';

export default function PostTemplate({
   data,
   pageContext,
}: More): React.ReactElement {
   const { slug } = pageContext;
   const postNode = data.markdownRemark;
   const post = postNode.frontmatter;
   if (!post.id) {
      post.id = slug;
   }

   return (
      <Layout>
         <div>
            <Helmet>
               <title>{`${post.title} | ${config.siteTitle}`}</title>
            </Helmet>
            <SEO postPath={slug} postNode={postNode} postSEO />
            <div>
               <h1>{post.title}</h1>
               {/* eslint-disable-next-line react/no-danger */}
               <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
               <div className="post-meta">
                  <PostTags tags={post.tags} />
                  <SocialLinks postPath={slug} postNode={postNode} />
               </div>
               <UserInfo config={config} />
               <Disqus postNode={postNode} />
               <Footer config={config} />
            </div>
         </div>
      </Layout>
   );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
   query BlogPostBySlug($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
         html
         timeToRead
         excerpt
         frontmatter {
            title
            cover
            date
            category
            tags
         }
         fields {
            slug
            date
         }
      }
   }
`;
