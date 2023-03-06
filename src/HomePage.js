import React from 'react';

const HomePage = () => {
    return (
        <div className= "HomePage">

            {/* Navbar */}
      <nav>
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
      </nav>

      {/* Main content */}
      <div className="content">
        {/* First horizontal flex box */}
        <div className="flex-box">
          <div className="container">
            <p>It's important to provide a safe and nurturing environment for kids to grow and learn.</p>
          </div>
          <div className="container">
            <img src="kid-image.jpg" alt="Kid" />
          </div>
        </div>

        {/* Second horizontal flex box */}
        <div className="flex-box">
          <div className="card">
            <div className="front">
              <img src="card-image-1.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>Card content 1</p>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src="card-image-2.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>Card content 2</p>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src="card-image-3.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>Card content 3</p>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <img src="card-image-4.jpg" alt="Card front" />
            </div>
            <div className="back">
              <p>Card content 4</p>
            </div>
          </div>
        </div>

        {/* Third horizontal flex box */}
        <div className="flex-box">
          <div className="container">
            <p>"I had a great experience using this product. Highly recommended!"</p>
          </div>
          <div className="container">
            <img src="user-image.jpg" alt="User" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>FYP project</p>
        <div className="social-icons">
          <a href="/"><i className="fa fa-youtube"></i></a>
          <a href="/"><i className="fa fa-facebook"></i></a>
          <a href="/"><i className="fa fa-instagram"></i></a>
        </div>
      </footer>

            
             </div>

    )
}

export default HomePage;