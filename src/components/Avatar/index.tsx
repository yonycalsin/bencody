import clsx from 'clsx';
import React, { FC } from 'react';
import type { IShape } from 'src/utils/theme';
import { AvatarContainer, AvatarImage } from './elements';

const placeholder =
   'https://www.flaticon.com/svg/static/icons/svg/847/847969.svg';

export interface IAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
   image?: string;
   ImageProps?: React.ImgHTMLAttributes<HTMLImageElement>;
   size?: number;
   shape?: IShape;
}

const Avatar: FC<IAvatarProps> = (props) => {
   const { children, className, image, ImageProps, ...rest } = props;

   return (
      <AvatarContainer {...rest} className={clsx('fx fx-cc', className)}>
         {children || (
            <AvatarImage src={image || placeholder} {...ImageProps} />
         )}
      </AvatarContainer>
   );
};

export default Avatar;
