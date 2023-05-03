import React from 'react';
import { useRef, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';

function ScieneceExperimentsAr() {
  const playerRef = useRef(null);

  useEffect(() => {
    // Initialize YouTube player
    const player = new window.YT.Player(playerRef.current, {
      videoId: 'jKCTh668akI',
      events: {
        onStateChange: onPlayerStateChange,
      },
    });

    // Function to handle player state changes
    function onPlayerStateChange(event) {
      if (event.data === window.YT.PlayerState.ENDED) {
        // Redirect to homepage when video ends
        window.location.href = '/Home';
      }
    }

    return () => {
      // Cleanup player instance
      player.destroy();
    };
  }, []);

  return (
    <div className="Hosting">
      <Navbar>
        <Navigation />
      </Navbar>
      <div style={{ position: 'relative', height: 'calc(100vh - 64px)' }}>
        <div
          ref={playerRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        ></div>
      </div>
      <footer>
        <p> Credit to شارع العلوم channel</p>
        <Footer />
      </footer>
    </div>
  );
}

export default ScieneceExperimentsAr;
