import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';

const ABTar = () => {
  return (
    <div>
      <Navbar>
        <Navigation />
      </Navbar>

      <iframe src="https://3asafeer.com/" width="100%" height="800px"></iframe>

      <footer>
      <p>© Copyright: 3asafeer.com </p>
        <Footer />
      </footer>
    </div>
  );
};

export default ABTar;
