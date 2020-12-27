import React, { FC } from 'react';
import { config } from 'src/utils';
import { Typography } from '..';

const About: FC = () => {
   return (
      <div>
         <Typography textStyle="h1Bold" as="h1" className="tac">
            About
         </Typography>
         <Typography textStyle="h4Regular" className="tac" as="h5">
            This website was created with ❤️ by{' '}
            <a
               href={config.author.url}
               target="_blank"
               rel="noopener noreferrer"
            >
               Yony Calsin
            </a>
         </Typography>
      </div>
   );
};

export default About;
