import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';


const TF1Fr = () => {
  return (
    <div>
      <Navbar>
        <Navigation />
      </Navbar>

      <iframe title="TFOU" src="https://www.tfo.org/minitfo" width="100%" height="600px" frameborder="0" allowfullscreen></iframe>

      <footer>
      <p>© Copyright: TFO</p>
        <Footer />
      </footer>
    </div>
  );
};

export default TF1Fr;
