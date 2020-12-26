import React, { FC } from 'react';

interface Props {
   image: string;
   title: string;
   path?: string;
}

const Item: FC<Props> = (props) => {
   const { image, title, path = '#' } = props;

   return (
      <a href={path} className="featured-item">
         <img src={image} alt={title} />
         <h3 className="featured-title">{title}</h3>
      </a>
   );
};

export default Item;
