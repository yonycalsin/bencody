import React, { FC } from 'react';
import { Follow } from 'react-twitter-widgets';

interface Props {
   config: More;
   expanded?: boolean;
}

const UserInfo: FC<Props> = (props) => {
   const { config, expanded } = props;

   const { userTwitter = 'yonycalsin' } = config;

   return (
      <Follow
         username={userTwitter}
         options={{ count: expanded ? true : 'none' }}
      />
   );
};

export default UserInfo;
