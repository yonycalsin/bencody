import React, { FC } from 'react';
import { Featured } from 'src/components';

interface Props {
   title: string;
   dataSource: More[];
   prefixUrl?: string;
}

const FeaturedListing: FC<Props> = (props) => {
   const { title, dataSource, prefixUrl } = props;

   return (
      <div>
         <div className="container">
            <h1 className="tac">{title}</h1>
            <Featured dataSource={dataSource} prefixUrl={prefixUrl} />
         </div>
      </div>
   );
};

export default FeaturedListing;
