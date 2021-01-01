import { map } from 'lodash';
import React, { FC } from 'react';
import { Item } from './components';
import './styles.scss';

interface Props {
   dataSource: More[];
   prefixUrl?: string;
}

const Featured: FC<Props> = (props) => {
   const { dataSource, prefixUrl } = props;

   return (
      <div className="featured fx fx-jcc fx-ww">
         {map(dataSource, ({ image, title, slug }, index) => (
            <Item
               key={index}
               image={image}
               title={title}
               path={prefixUrl + slug}
            />
         ))}
      </div>
   );
};

export default Featured;
