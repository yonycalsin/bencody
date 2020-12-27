import { Link } from 'gatsby';
import React, { Component } from 'react';
import { Actions, Brand, Container, Navigation, Wrapper } from './elements';

const menuLinks = [
   {
      name: 'Use Cases',
      link: '/muse-cases',
   },
   {
      name: 'Contribute',
      link: '/contribute',
   },
];

class Navbar extends Component {
   state = {
      scrolled: false,
   };

   componentDidMount() {
      window.addEventListener('scroll', this.navOnScroll);
   }

   componentWillUnmount() {
      window.removeEventListener('scroll', this.navOnScroll);
   }

   navOnScroll = () => {
      if (window.scrollY > 20) {
         this.setState({ scrolled: true });
      } else {
         this.setState({ scrolled: false });
      }
   };

   render() {
      const { scrolled } = this.state;

      return (
         <Wrapper scrolled={scrolled}>
            <Container className="container fx fx-aic fx-jcsb">
               <Brand>
                  <Link to="/" className="fx fx-cc">
                     <img src="https://i.ibb.co/R4gX38Y/image.png" />
                  </Link>
               </Brand>
               <Navigation className="fx fx-cc">
                  {menuLinks.map((link) => (
                     <Link key={link.name} to={link.link}>
                        {link.name}
                     </Link>
                  ))}
               </Navigation>
               <Actions className="fx fx-cc">
                  <a
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://github.com/yonycalsin"
                  >
                     <img src="https://image.flaticon.com/icons/svg/1051/1051326.svg" />
                  </a>
                  <a
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://twitter.com/yonycalsin"
                  >
                     <img src="https://image.flaticon.com/icons/svg/733/733579.svg" />
                  </a>
               </Actions>
            </Container>
         </Wrapper>
      );
   }
}

export default Navbar;
