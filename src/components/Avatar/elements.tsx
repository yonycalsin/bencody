import { getSizeStyle, theme } from 'src/utils';
import styled, { css } from 'styled-components';

export const AvatarImage = styled.img`
   object-fit: contain;
   border-radius: 50%;
   height: 100%;
   object-fit: cover;
   width: 100%;
`;

const getAvatarShapeStyle = (props) => {
   const { size = 4, shape = 'circle' } = props;

   const realSize = size * 8;

   const fontSize = realSize / 2;

   const isCircle = shape === 'circle';

   let borderRadius = '50%';

   if (!isCircle) {
      borderRadius = '0px';
   }

   return css`
      min-width: ${realSize}px;
      min-height: ${realSize}px;
      border-radius: ${borderRadius};
      font-size: ${fontSize}px;
      ${getSizeStyle(realSize)}
      ${AvatarImage} {
         border-radius: ${borderRadius};
      }
   `;
};

export const AvatarContainer = styled.div`
   color: ${theme.colors.white};
   ${getAvatarShapeStyle}
`;
