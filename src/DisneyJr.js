import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';

function DisneyJr() {

  return (
    <div>
      <Navbar>
        <Navigation />
      </Navbar>
      <iframe title="disney junior" src="https://disneyjunior.disney.com" width="100%" height="600"></iframe>
      
      <footer>
      <p>© Copyright: DisneyJr </p>
        <Footer />
      </footer>
    </div>
  );
}

export default DisneyJr;
