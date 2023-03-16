import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

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
      <div className="content">
        {/* First horizontal flex box */}
        <div className="flex-box space">
          <div className="card">
            <div className="front">
              <h1></h1>
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
        

        {/* Second horizontal flex box */}
        <div className="flex-box space">
          <div className="card">
            <div className="front">
              <h1></h1>
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

        {/* Third horizontal flex box */}
        <div className="flex-box space">
        <div className="card">
            <div className="front">
              <h1></h1>
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
      </div>

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