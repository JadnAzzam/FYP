import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';


function EmbeddedVideo() {
  return (
    <div className='Hosting'> 
    <Navbar> <Navigation /></Navbar>
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <iframe 
        src="https://www.youtube.com/embed/nGImD-h0eFQ" 
        title="Embedded YouTube video"
        frameBorder="0"
        allowFullScreen
        style={{ width: '80%', height: '80%' }}
      ></iframe>
    </div>
    <footer> <Footer /> </footer>
    </div>
  );
}

export default EmbeddedVideo;
