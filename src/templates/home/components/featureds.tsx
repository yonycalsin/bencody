import React, { FC } from 'react';
import { Featured } from 'src/components';

interface Props {
   title: string;
   dataSource: More[];
}

const Featureds: FC<Props> = (props) => {
   const { title, dataSource } = props;

   return (
      <div>
         <div className="container">
            <h1 className="tac">{title}</h1>
            <Featured dataSource={dataSource} />
         </div>
      </div>
   );
};

export default Featureds;
