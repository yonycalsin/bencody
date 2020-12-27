import React, { FC } from 'react';
import { Avatar, Space } from '..';

const UserLinks: FC<More> = (props) => {
   const { config } = props;

   function getLinkElements() {
      const { userLinks } = config;

      return userLinks.map((link) => (
         <a
            href={link.url}
            key={link.label}
            target="_blank"
            rel="noopener noreferrer"
         >
            <Avatar
               shape="square"
               image={link.image}
               ImageProps={{
                  alt: link.label,
                  title: link.label,
               }}
               objectFit="contain"
            />
         </a>
      ));
   }

   const { userLinks } = config;

   if (!userLinks) {
      return null;
   }

   return <Space>{getLinkElements()}</Space>;
};

export default UserLinks;
