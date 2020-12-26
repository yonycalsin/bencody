import { map } from 'lodash';
import React, { FC } from 'react';
import { Item } from './components';
import './styles.scss';

interface Props {
   dataSource: More[];
}

const Featured: FC<Props> = (props) => {
   const { dataSource } = props;

   return (
      <div className="featured fx fx-jcsa fx-ww">
         {map(dataSource, ({ image, title, slug }, index) => (
            <Item
               key={index}
               image={image}
               title={title}
               path={`/language/${slug}`}
            />
         ))}
      </div>
   );
};

export default Featured;
