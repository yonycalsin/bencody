import React from 'react';
import { Follow } from 'react-twitter-widgets';

function UserInfo({ config, expanded }: More) {
   const { userTwitter } = config;

   return (
      <Follow
         username={userTwitter}
         options={{ count: expanded ? true : 'none' }}
      />
   );
}

export default UserInfo;
