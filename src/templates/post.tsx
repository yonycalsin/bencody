import { graphql } from 'gatsby';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Space, Typography } from 'src/components';
import MainLayout from 'src/layout';
import { theme } from 'src/utils';
import config from 'src/utils/config';
import styled from 'styled-components';
import PostTags from '../components/PostTags/PostTags';
import SEO from '../components/SEO/SEO';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import UserInfo from '../components/UserInfo/UserInfo';

const Wrapper = styled.div`
   background: #eee;
   padding: ${theme.space(5, 0)};
`;

const PostTemplate: FC<More> = (props) => {
   const { data, pageContext } = props;

   const { slug } = pageContext;

   const postNode = data.markdownRemark;

   const { frontmatter: post, fields } = postNode;

   if (!post.id) {
      post.id = slug;
   }

   return (
      <MainLayout>
         <Wrapper>
            <Helmet>
               <title>{`${post.title} | ${config.siteTitle}`}</title>
            </Helmet>
            <div className="container">
               <SEO postPath={slug} postNode={postNode} postSEO />
               <Space
                  direction="vertical"
                  style={{ width: '100%' }}
                  itemProps={{
                     style: {
                        width: '100%',
                     },
                  }}
               >
                  <div className="fx fx-aic fx-jcsb">
                     <Typography as="h1" textStyle="h2Bold">
                        {post.title}
                     </Typography>
                     <Typography color="gray-600">
                        {fields.dateFormated}
                     </Typography>
                  </div>
                  <PostTags tags={post.tags} />
                  <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
                  <div className="fx fx-aic fx-jcsb">
                     <SocialLinks postPath={slug} postNode={postNode} />
                     <UserInfo config={config} expanded />
                  </div>
               </Space>
            </div>
         </Wrapper>
      </MainLayout>
   );
};

export default PostTemplate;

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
            author
         }
         fields {
            slug
            date
            dateFormated: date(formatString: "MMMM DD, YYYY")
         }
      }
   }
`;
