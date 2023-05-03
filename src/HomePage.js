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
        {shouldDisplayLanguage('en') &&  (
          
          <div className="flex-box space">
          <div className="card">
          <a href="/Games" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="front">
              <img src="/Arcade.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>Arcades are a blast! Spend an afternoon socializing and competing with friends to beat the high score. Fun starts 
              <Link to="/Games" style={{ textDecoration: 'none', color: 'inherit' }}> now </Link>
              </p>
            </div>
            </a>
          </div>


          <div className="card">
          <a href="/SesameStreet" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="front">
              <img src="/sesame.png" alt="Card front" />
            </div>
            <div className="back">
              <p>Sesame street offers a fun-filled and educational experience for children, where they can play, sing, and learn alongside their beloved furry friends.
              <Link to="/SesameStreet" style={{ textDecoration: 'none', color: 'inherit' }}> </Link>
              </p>
            </div>
            </a>
          </div>

          <div className="card">
          <a href="/Education" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="front">
              <img src="/education.png" alt="Card front" />
            </div>
            <div className="back">
              <p>Education can be fun! Solve puzzles and brain teasers to challenge your skills and have a good 
              <Link to="/Education" style={{ textDecoration: 'none', color: 'inherit' }}> time</Link>
              </p>
            </div>
            </a>
          </div>

          <div className="card">
          <a href="/DrPandaYt" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="front">
              <img src="/DrPandaYt.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>Dive into the captivating world of Dr Panda and his amazing educational vdieos
              <Link to="/DrPandaYt"  style={{ textDecoration: 'none', color: 'inherit' }}> here!</Link>
              </p>
            </div>
            </a>
          </div>
         
        </div>
        
        )}
        </div>
        <div className="flex-box space">
        {shouldDisplayLanguage('en') &&  (
         
          <div className="flex-box space">
          <div className="card">
          <a href="/DisneyJr" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="front">
              <img src="/DisneyJr.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>Dive into the captivating world of Dr Panda and his amazing educational vdieos
              <Link to="/DisneyJr" style={{ textDecoration: 'none', color: 'inherit' }}> here!</Link>
              </p>
            </div>
            </a>
          </div>

          <div className="card">
          <a href="/NationalGeoKids" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="front">
              <img src="/NationalGeoKids.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>Explore the incredible world of nature and science with National Geographic Kids, where adventure,discovery,and learning await you at every turn.
              <Link to="/NationalGeoKids" style={{ textDecoration: 'none', color: 'inherit' }}> </Link>
              </p>
            </div>
            </a>
          </div>

          <div className="card">
          <a href="/DIY" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="front">
              <img src="/DIY.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>Education can be fun! Solve puzzles and brain teasers to challenge your skills and have a good 
              <Link to="/DIY" style={{ textDecoration: 'none', color: 'inherit' }}> time</Link>
              </p>
            </div>
            </a>
          </div>
          <div className="card">
          <a href="/britishmusuem" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="front">
              <img src="/Virtualtour.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>Virtual tours are like magic carpets that can take you anywhere you want to go! You can explore the world without ever leaving your house. Let's go on a virtual adventure 
              <Link to="/britishmusuem" style={{ textDecoration: 'none', color: 'inherit' }}> together!</Link>
              </p>
            </div>
            </a>
          </div>
          
        </div>
        
        )}
        </div>

        <div className="flex-box space">
        { shouldDisplayLanguage('ar') && (
          <div className="flex-box space">
          <div className="card">
          <a href="/YTArAnimals" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="front">
              
              <img src="/YtArAnimals.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>تعالوا لنتعلم عن الحيوانات هنا ونكتشف عالمها المثير 
              <Link to="/YTArAnimals" style={{ textDecoration: 'none', color: 'inherit' }}> !المثير</Link>
              </p>
            </div>
            </a>
          </div>

         
          <div className="card">
          <a href="/ABTar" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="front">
              <img src="/ABtar.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>أهلاً بكم لنتعلم، نقرأ ونمضي وقتًا ممتعًا هنا
              <Link to="/ABTar" style={{ textDecoration: 'none', color: 'inherit' }}> هنا !</Link>
              </p>
            </div>
            </a>
          </div>
          
          <div className="card">
          <a href="/GamesAr" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="front">
              <img src="/MBC3.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>تعالوا وانضموا إلينا في مغامرات مدهشة و اكتشفوا العديد من الألعاب المسلية والأنشطة الممتعة التي ستضمن لكم وقتًا مليئًا بالمرح والإثارة. هيا بنا نلعب ونستمتع معًا في عالم مليء بالإبداع والتسلية على 
              <Link to="/GamesAr" style={{ textDecoration: 'none', color: 'inherit' }} > MBC3!</Link>
              </p>
            </div>
            </a>
          </div>
          <div className="card">
          <a href="/ScAR" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="front">
              <img src="/ChemAr1.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>.تعالى نستكشف سوياً تجارب علمية نستطيع أن نتعلم منها كثيراً
              <Link to="/ScAR" style={{ textDecoration: 'none', color: 'inherit' }}> !هيا بنا</Link>
              </p>
            </div>
            </a>
          </div>
          
          </div> 
        )}
        </div> 


        <div className="flex-box space">
          { shouldDisplayLanguage('fr') && (
          <div className="flex-box space">
          <div className="card">
          <a href="/PappaPigYtFr" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="front">
              
              <img src="/PigFr.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>Rejoins-nous pour une aventure amusante avec
              <Link to="/PappaPigYtFr" style={{ textDecoration: 'none', color: 'inherit' }}> Peppa Pig !</Link>
              </p>
            </div>
            </a>
          </div>


          <div className="card">
          <a href="/TF1Fr" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="front">
              <img src="/TFO.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>Viens t'amuser et découvrir des activités amusantes et éducatives sur 
              <Link to="/TF1Fr" style={{ textDecoration: 'none', color: 'inherit' }}> TFO!</Link>
              </p>
            </div>
            </a>
          </div>
          <div className="card">
          <a href="/PetitFr" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="front">
              <img src="/petit.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>Venez vous joindre à nous et exprimez votre créativité en dessinant, en coloriant et en vous amusant 
              <Link to="/PetitFr"  style={{ textDecoration: 'none', color: 'inherit' }}> ici !</Link>
              </p>
            </div>
            </a>
          </div>
          <div className="card">
          <a href="/FrVirtualTour" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="front">
              <img src="/Virtualtour.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>Venez découvrir une visite virtuelle passionnante au Louvre et plongez dans l'univers de l'art et de 
              <Link to="/FrVirtualTour" style={{ textDecoration: 'none', color: 'inherit' }}>l'histoire !</Link>
              </p>
            </div>
            </a>
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