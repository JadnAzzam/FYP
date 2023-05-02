// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';

import Navigation from './Navigation';
import Footer from './Footer';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "@fontsource/bubblegum-sans";
import axios from "axios";

const HomePage = () => {

  const [selectedLanguages, setSelectedLanguages] = useState(['en', 'ar', 'fr']);

  const handleLanguageSelection = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter(lang => lang !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const handleResetLanguages = () => {
    setSelectedLanguages([]);
  };

  const shouldDisplayLanguage = (language) => {
    if (selectedLanguages.length === 0) {
      return false; // Show all languages if none are selected
    }

    return selectedLanguages.includes(language);
  };

  useEffect(() => {
    if(sessionStorage.getItem("childId") == -1)
    window.location.href = '/signIn';
    handleResetLanguages();
    axios
      .get('http://localhost/backend/children/getLang.php', { params: { childID: sessionStorage.getItem("childId") } })
      .then((res) => {
        //if(res.data != "Child name could not be loaded, try again later.")
        setSelectedLanguages(res.data.split(","));
      });
    
    
  }, []);




  return (
    <div className="HomePage">

      <Navbar>
        <Navigation handleLanguageSelection={handleLanguageSelection} />
      </Navbar>

      <div className="flex-box space">
        {shouldDisplayLanguage('en') && (
          <div className="flex-box space">
            <div className="card">
              <div className="front">
                <img src="/Arcade.jpg" alt="Card front" />
              </div>
              <div className="back">
                <p>Arcades are a blast! Spend an afternoon socializing and competing with friends to beat the high score. Fun starts
                  <Link to="/Games"> now </Link>
                </p>
              </div>
            </div>


          <div className="card">
            <div className="front">
              <img src="/sesame.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>Hey there, kiddos! Welcome to Sesame Street, the coolest place to be for tons of fun and giggles! Get ready to play, sing, and laugh your hearts out with your favorite furry friends all day long! Let's make memories and learn amazing things together on this awesome 
              <Link to="/SesameStreet"> street!</Link>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src="/Math.png" alt="Card front" />
            </div>
            <div className="back">
              <p>Math can be fun! Solve puzzles and brain teasers to challenge your math skills and have a good time.</p>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src="/virtualtour2.png" alt="Card front" />
            </div>
            <div className="back">
              <p>Virtual tours are like magic carpets that can take you anywhere you want to go! You can explore the world without ever leaving your house. Let's go on a virtual adventure 
              <Link to="/Virtual"> together!</Link>
              </p>
            </div>
          </div>
          
          
        </div>
        )}
      </div>

      <div className="flex-box space">
        {shouldDisplayLanguage('ar') && (
          <div className="flex-box space">
            <div className="card">
              <div className="front">

                <img src="/history.png" alt="Card front" />
              </div>
              <div className="back">
                <p>Arabic
                </p>
              </div>
            </div>


            <div className="card">
              <div className="front">
                <img src="/puzzle.png" alt="Card front" />
              </div>
              <div className="back">
                <p>Coding is a blast! With programming skills, you can create your own video games and turn your imagination into a playable reality. Don't be afraid to experiment and have some fun while
                  <Link to=""> together!</Link>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="front">
                <img src="/DIY.png" alt="Card front" />
              </div>
              <div className="back">
                <p>Math can be fun! Solve puzzles and brain teasers to challenge your math skills and have a good time.</p>
              </div>
            </div>
            <div className="card">
              <div className="front">
                <img src="/paint.png" alt="Card front" />
              </div>
              <div className="back">
                <p>Virtual tours are like magic carpets that can take you anywhere you want to go! You can explore the world without ever leaving your house. Let's go on a virtual adventure
                  <Link to="britishmusuem"> together!</Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>


      <div className="flex-box space">
        {shouldDisplayLanguage('fr') && (
          <div className="flex-box space">
            <div className="card">
              <div className="front">

                <img src="/history.png" alt="Card front" />
              </div>
              <div className="back">
                <p>French
                </p>
              </div>
            </div>


            <div className="card">
              <div className="front">
                <img src="/puzzle.png" alt="Card front" />
              </div>
              <div className="back">
                <p>Coding is a blast! With programming skills, you can create your own video games and turn your imagination into a playable reality. Don't be afraid to experiment and have some fun while
                  <Link to=""> together!</Link>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="front">
                <img src="/DIY.png" alt="Card front" />
              </div>
              <div className="back">
                <p>Math can be fun! Solve puzzles and brain teasers to challenge your math skills and have a good time.</p>
              </div>
            </div>
            <div className="card">
              <div className="front">
                <img src="/paint.png" alt="Card front" />
              </div>
              <div className="back">
                <p>Virtual tours are like magic carpets that can take you anywhere you want to go! You can explore the world without ever leaving your house. Let's go on a virtual adventure
                  <Link to="britishmusuem"> together!</Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>



      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
