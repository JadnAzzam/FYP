import React from 'react';
import { useRef, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';
import ScratchEditor from './scratcheditor';

function ScratchYT(){

      return (
        <div> 
            <Navbar> <Navigation /></Navbar>
        <div style={{ display: 'flex', height: '100vh' }}>
          {/* Left half */}
          <div style={{ flex: 1 }}>
            <iframe
              title="YouTube Video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/BlmBDrnhd2I"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
    
          {/* Right half */}
          <div style={{ flex: 1 }}>
            <ScratchEditor/>
          </div>
        </div>
        <footer> <Footer /> </footer>
        </div>
      );
    
    
   
    


};



export default ScratchYT;