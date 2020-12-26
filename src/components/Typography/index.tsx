import { CSSProperties, HTMLAttributes, LabelHTMLAttributes } from 'react';
import { getTextStyle, theme } from 'src/utils';
import type { IColors, ITextStyles } from 'src/utils/theme';
import styled from 'styled-components';

const getTextColor = (props) => {
   const { color } = props;
   const key = color || 'black';

   return theme.colors[key];
};

const printTextStyle = (props) => {
   const { textStyle } = props;
   const key = textStyle || 'h5Regular';

   return getTextStyle(theme.textStyles[key]);
};

const printTextAlign = (props) => {
   const { textAlign } = props;

   if (!textAlign) {
      return '';
   }

   return `
    text-align: ${textAlign};
    width: 100%;
  `;
};

const printEllipsisStyle = (props) => {
   const { ellipsis } = props;

   if (!ellipsis) {
      return '';
   }

   return `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;
};

type IExtend =
   | HTMLAttributes<HTMLHeadingElement>
   | LabelHTMLAttributes<HTMLLabelElement>
   | HTMLAttributes<HTMLParagraphElement>;

export interface ITypographyProps extends Pick<CSSProperties, 'textAlign'> {
   color?: IColors;
   textStyle?: ITextStyles;
   ellipsis?: boolean;
}

const Typography = styled.span<ITypographyProps & Omit<IExtend, 'color'>>`
   color: ${getTextColor};
   margin: 0;

   ${printTextAlign}
   ${printTextStyle}
   ${printEllipsisStyle}
`;

Typography.displayName = 'Typography';

export default Typography;
