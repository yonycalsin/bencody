import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

// Reset box sizing to border box
html {
   box-sizing: border-box;
   font-family: 'Poppins', sans-serif;
}

*,
*::before,
*::after {
   box-sizing: border-box;
}

body {
   font-size: 1rem;
}

// Remove figure margin
figure,
body {
   margin: 0;
}

::selection {
   background: ${(props) => props.theme.colors.primary};
   color: white;
}

img::selection {
   background: transparent;
}

a {
   text-decoration: none;
   color: ${(props) => props.theme.colors.primary};

   &:hover {
      color: ${(props) => props.theme.colors.primary};
   }
}

.container {
   max-width: 850px;
   width: 100%;
   margin: auto;
}

.tac {
   text-align: center;
}

`;

export default GlobalStyle;
