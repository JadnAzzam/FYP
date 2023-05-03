import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';


const PetitFr = () => {
  return (
    <div>
      <Navbar>
        <Navigation />
      </Navbar>

      <iframe title="Petit Poussin" src="https://www.petitpoussin.fr/" width="100%" height="600px" frameBorder="0" allowFullScreen></iframe>

        <footer>
        <p>© Copyright: Petitpoussin.fr</p>
        <Footer />
      </footer>
    </div>
  );
};

export default PetitFr;
