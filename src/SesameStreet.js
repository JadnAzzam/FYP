import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';

function SesameStreet() {

  return (
    <div>
      <Navbar>
        <Navigation />
      </Navbar>
      <iframe title="e" src="https://www.sesamestreet.org/videos" width="100%" height="600"></iframe>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SesameStreet;
