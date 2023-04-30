import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import './Navigation.css';

function Navigation({ handleLanguageSelection }) {
  const { t } = useTranslation();

  const handleCheckboxChange = (e) => {
    const language = e.target.value;
    handleLanguageSelection(language);
  };

  return (
    <div> 
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
          <a class="navbar-brand mar" href="#action">ImaginationStation</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/Home">Home <span class="sr-only">(current)</span></a>
              </li>
              <NavDropdown title="dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Categories</NavDropdown.Item>
                      <NavDropdown.Item href="/Dashboard">Dashboard</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/signin"> LogOut</NavDropdown.Item>
                    </NavDropdown>
            </ul>
          </div>
        </nav>

        
      </div>

    <div>
      <label>
        <input type="checkbox" value="en" onChange={handleCheckboxChange}/>English
      </label>
      <label>
        <input type="checkbox" value="ar" onChange={handleCheckboxChange}/>Arabic
      </label>
      <label>
        <input type="checkbox" value="fr" onChange={handleCheckboxChange}/>French
      </label>
    </div>

  </div>
  );
}

export default Navigation;
