import { map } from 'lodash';
import React from 'react';
import { languages } from 'src/utils/data';
import { Item } from './components';
import './styles.scss';

const Featured = () => {
   return (
      <div className="featured fx fx-jcsa fx-ww">
         {map(languages, ({ image, title, slug }, index) => (
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
