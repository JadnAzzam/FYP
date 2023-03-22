import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';


function EmbeddedVideo() {
  return (
    <div className='Hosting'> 
    <Navbar> <Navigation /></Navbar>
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* <iframe 
        src="https://www.youtube.com/embed/nGImD-h0eFQ/?origin=https://www.youtubekids.com" 
        title="Embedded YouTube video"
        frameBorder="0"
        allowFullScreen
        style={{ width: '80%', height: '80%' }}
      ></iframe> */}

<iframe
  title="YouTube video player"
  src={`https://www.youtube.com/embed/nGImD-h0eFQ/?origin=https://www.youtubekids.com?rel=0`}
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
style={{ width: '80%', height: '80%' }}

></iframe>
    </div>
    <footer> <Footer /> </footer>
    </div>
  );
}

export default EmbeddedVideo;
