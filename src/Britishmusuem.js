import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';


const Britishmusuem = () => {
  return (
    <div>
      <Navbar>
        <Navigation />
      </Navbar>

      <iframe
        title="Virtual Tour of Victorian Walk" 
                src="https://my.matterport.com/show/?m=QLrqiMThfdG"
                width="100%"
                height="600"
                frameBorder="0"
                allowFullScreen
      ></iframe>
        <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Britishmusuem;



