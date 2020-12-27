import React, { FC } from 'react';
import {
   FacebookIcon,
   FacebookShareButton,
   FacebookShareCount,
   LinkedinIcon,
   LinkedinShareButton,
   RedditIcon,
   RedditShareButton,
   RedditShareCount,
   TelegramIcon,
   TelegramShareButton,
   TwitterIcon,
   TwitterShareButton,
} from 'react-share';
import config from 'src/utils/config';
import urljoin from 'url-join';
import { Space } from '..';

const SocialLinks: FC<More> = (props) => {
   const { postNode, postPath, mobile } = props;

   const post = postNode.frontmatter;

   const url = urljoin(config.siteUrl, config.pathPrefix, postPath);

   const iconSize = mobile ? 36 : 48;

   const filter = (count) => (count > 0 ? count : '');

   const renderShareCount = (count) => (
      <div className="share-count">{filter(count)}</div>
   );

   return (
      <Space>
         <RedditShareButton url={url} title={post.title}>
            <RedditIcon round size={iconSize} />
            <RedditShareCount url={url}>
               {(count) => renderShareCount(count)}
            </RedditShareCount>
         </RedditShareButton>
         <TwitterShareButton url={url} title={post.title}>
            <TwitterIcon round size={iconSize} />
         </TwitterShareButton>
         <FacebookShareButton url={url} quote={postNode.excerpt}>
            <FacebookIcon round size={iconSize} />
            <FacebookShareCount url={url}>
               {(count) => renderShareCount(count)}
            </FacebookShareCount>
         </FacebookShareButton>
         <LinkedinShareButton
            url={url}
            title={post.title}
            // description={postNode.excerpt}
         >
            <LinkedinIcon round size={iconSize} />
         </LinkedinShareButton>
         <TelegramShareButton url={url}>
            <TelegramIcon round size={iconSize} />
         </TelegramShareButton>
      </Space>
   );
};

export default SocialLinks;
