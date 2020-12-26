import styled, { css } from 'styled-components';

const aligns = {
   center: 'center',
   start: 'flex-start',
   end: 'flex-end',
   baseline: 'baseline',
};

const getMoreStyles = (props: Theme & More) => {
   const { horizontalSize, verticalSize, direction, wrap, align } = props;

   const alignStyle = aligns[align];

   let flexDirection = 'row';

   let marginBottom = 'initial';

   let marginRight = horizontalSize + 'px';

   if (direction === 'vertical') {
      marginRight = '0px';
      marginBottom = horizontalSize + 'px';
      flexDirection = 'column';
   }

   return css`
      flex-direction: ${flexDirection};
      align-items: ${alignStyle};
      > div:not(:last-child) {
         margin-bottom: ${marginBottom};
         margin-right: ${marginRight};
      }
      > div {
         padding-bottom: ${wrap ? verticalSize : 0}px;
      }
   `;
};

export const SpaceContainer = styled.div<More>`
   display: inline-flex;
   ${getMoreStyles}
`;
