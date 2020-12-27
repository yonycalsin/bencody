import { getSizeStyle, theme } from 'src/utils';
import styled, { css } from 'styled-components';

export const AvatarImage = styled.img`
   border-radius: 50%;
   height: 100%;
   object-fit: cover;
   width: 100%;
`;

const getAvatarShapeStyle = (props) => {
   const { size = 4, shape = 'circle' } = props;

   const originalSize = size * 8;

   const fontSize = originalSize / 2;

   const borderRadius = theme.shapes[shape];

   return css`
      min-width: ${originalSize}px;
      min-height: ${originalSize}px;
      border-radius: ${borderRadius};
      font-size: ${fontSize}px;

      ${getSizeStyle(originalSize)}

      ${AvatarImage} {
         border-radius: ${borderRadius};
      }
   `;
};

export const AvatarContainer = styled.div`
   color: ${theme.colors.white};

   ${getAvatarShapeStyle}
`;
