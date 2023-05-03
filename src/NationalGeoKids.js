
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';

function NationalGeoKids() {

  return (
    <div>
      <Navbar>
        <Navigation />
      </Navbar>
      <iframe title="NatGeoKids" src="https://www.natgeokids.com/uk/category/discover/" width="100%" height="600"></iframe>
 
      <footer>
      <p>© Copyright: NationalGeoKids</p>
        <Footer />
      </footer>
    </div>
  );
}

export default NationalGeoKids;
