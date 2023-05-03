import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';


const Games = () => {
  return (
    <div>
      <Navbar>
        <Navigation />
      </Navbar>

      <iframe src="https://www.cartoonnetworkhq.com/games" width="100%" height="800px"></iframe>

        <footer>
        <p>© Copyright: Cartoon Network </p>
        <Footer />
      </footer>
    </div>
  );
};

export default Games;
