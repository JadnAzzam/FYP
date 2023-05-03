import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';

const ArGames = () => {
  return (
    <div>
      <Navbar>
        <Navigation />
      </Navbar>

      <iframe src="https://mbc3.mbc.net/games" width="100%" height="800px"></iframe>

      <footer>
      <p>© Copyright: MBC3 </p>
        <Footer />
      </footer>
    </div>
  );
};

export default ArGames;
