import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';


const FrVirtualTour = () => {
  return (
    <div>
      <Navbar>
        <Navigation />
      </Navbar>

      <iframe
        title="Virtual Tour of Victorian Walk" 
        src="https://petitegalerie.louvre.fr/visite-virtuelle/saison6/"
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      
      <footer>
      <p>© Copyright: Louvre.fr </p>
        <Footer />
      </footer>
    </div>
  );
};

export default FrVirtualTour;
