import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "@fontsource/bubblegum-sans";

const HomePage = () => {
    return (
        <div className= "HomePage">

            {/* Navbar */}
      {/* <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li>
            <a href="/">Categories</a>
            <ul>
              <li><a href="/">Category 1</a></li>
              <li><a href="/">Category 2</a></li>
              <li><a href="/">Category 3</a></li>
            </ul>
          </li>
        </ul>
      </nav> */}
      <Navbar> <Navigation /></Navbar>

      {/* Main content */}
      {/* <div className="content"> */}
        {/* First horizontal flex box */}
        <div className="flex-box space">
          <div className="card">
            <div className="front">
              <img src="/Arcade 2.png" alt="Card front" />
            </div>
            <div className="back">
              <p>Arcades are a blast! Spend an afternoon socializing and competing with friends to beat the high score. Fun starts 
              <Link to="/Games"> now </Link>
              </p>
            </div>
          </div>


          <div className="card">
            <div className="front">
              <img src="/Coding2.png" alt="Card front" />
            </div>
            <div className="back">
              <p>Coding is a blast! With programming skills, you can create your own video games and turn your imagination into a playable reality. Don't be afraid to experiment and have some fun while
              <Link to="/coding"> together!</Link>
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
        

        {/* Second horizontal flex box */}
        <div className="flex-box space">
          <div className="card">
            <div className="front">
              
              <img src="/history.png" alt="Card front" />
            </div>
            <div className="back">
              <p>Learning about history is an exciting adventure! It's like traveling through time and exploring the amazing stories of people who lived before us. You can discover the incredible inventions and discoveries of scientists like Marie Curie, who discovered radium and polonium, or the amazing military conquests of the great leader Napoleon Bonaparte.
              Are you ready to embark on a journey through time? Let's discover history together!
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

        {/* Third horizontal flex box */}
        <div className="flex-box space">
        <div className="card">
            <div className="front">
              
              <img src="/Games.png" alt="Card front" />
            </div>
            <div className="back">
              <p>Arcades are a blast! Spend an afternoon socializing and competing with friends to beat the high score.</p>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src="/coding.png" alt="Card front" />
            </div>
            <div className="back">
              <p>Coding is a blast! With programming skills, you can create your own video games and turn your imagination into a playable reality. Don't be afraid to experiment and have some fun while
              <Link to=""> together!</Link>
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
              <img src="/virtual-tour.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>Virtual tours are like magic carpets that can take you anywhere you want to go! You can explore the world without ever leaving your house. Let's go on a virtual adventure 
              <Link to="/Virtual"> together!</Link>
              </p>
            </div>
          
         
            </div>
        </div>
      {/* </div> */}

      {/* Footer */}
      {/* <footer>
        <p>FYP project</p>
        <div className="social-icons">
          <a href="/"><i className="fa fa-youtube"></i></a>
          <a href="/"><i className="fa fa-facebook"></i></a>
          <a href="/"><i className="fa fa-instagram"></i></a>
        </div>
      </footer> */}
      <footer> <Footer /> </footer>  
             </div>

    )
}

export default HomePage;