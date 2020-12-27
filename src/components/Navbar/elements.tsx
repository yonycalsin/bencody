import { theme } from 'src/utils';
import styled, { css } from 'styled-components';

const getScrolledStyle: any = ({ scrolled }) => {
   if (!scrolled) return '';

   return css`
      position: sticky;
      top: 0;
      box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);

      ${Container} {
         height: 60px;
      }
   `;
};

export const Wrapper = styled.nav<More>`
   background: white;
   z-index: 4;

   &,
   * {
      transition: all 0.2s ease-in-out;
   }

   ${getScrolledStyle}
`;

export const Container = styled.div`
   height: 160px;
`;

export const Brand = styled.div`
   img {
      height: 40px;
   }
`;

export const Navigation = styled.div`
   flex: 1 1;

   a {
      padding: ${theme.space(0.5, 1)};
      margin: 0 0.25rem;
      color: #555;
      font-size: 1.05rem;
      border-radius: 6px;

      &:hover {
         background: #eee;
         border-radius: 4px;
      }
   }
`;

export const Actions = styled.div`
   a {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0.25rem;
      font-size: 5em;

      img {
         height: ${theme.space(3)};
         width: ${theme.space(3)};
      }
   }
`;
