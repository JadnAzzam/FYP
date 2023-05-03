import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';

function Education() {

  return (
    <div>
      <Navbar>
        <Navigation />
      </Navbar>
      <iframe src="https://www.education.com/games/?gclid=Cj0KCQjw6cKiBhD5ARIsAKXUdyb3aM3HhdPQaUucJTJB4mDEyoxGKPb3n-U8dOHVLnuN1kO1GqLmufcaAmhoEALw_wcB" width="100%" height="600" ></iframe>
      <footer> 
      <p>© Copyright: Education.com </p>
        <Footer />
        </footer>
    </div>
  );
}

export default Education;