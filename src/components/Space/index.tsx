import React, { Children, FC, HTMLAttributes } from 'react';
import { SpaceContainer } from './elements';

type SizeType = 'small' | 'medium' | 'large';

type SpaceSize = SizeType | number;

export interface ISpaceProps extends HTMLAttributes<HTMLDivElement> {
   direction?: 'horizontal' | 'vertical';
   size?: SpaceSize | [SpaceSize, SpaceSize];
   align?: 'start' | 'end' | 'center' | 'baseline';
   wrap?: boolean;
   itemProps?: HTMLAttributes<HTMLDivElement>;
}

const spaceSize = {
   small: 8,
   middle: 16,
   large: 24,
};

function getNumberSize(size: SpaceSize) {
   return typeof size === 'string' ? spaceSize[size] : size || 0;
}

const Space: FC<ISpaceProps> = (props) => {
   const {
      size = 'small',
      direction = 'horizontal',
      wrap,
      align = direction === 'vertical' ? 'start' : 'center',
      itemProps,
      ...rest
   } = props;

   const [horizontalSize, verticalSize] = React.useMemo(
      () =>
         ((Array.isArray(size) ? size : [size, size]) as [
            SpaceSize,
            SpaceSize,
         ]).map((item) => getNumberSize(item)),
      [size],
   );

   const childNodes = Children.map(props.children, (item) => (
      <div {...itemProps}>{item}</div>
   ));

   if (childNodes?.length === 0) {
      return null;
   }

   return (
      <SpaceContainer
         direction={direction}
         horizontalSize={horizontalSize}
         verticalSize={verticalSize}
         wrap={wrap}
         align={align}
         {...rest}
      >
         {childNodes}
      </SpaceContainer>
   );
};

export default Space;
