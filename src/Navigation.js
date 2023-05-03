import React, { useState, useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import './Navigation.css';
import axios from "axios";

function Navigation({ handleLanguageSelection }) {



  // useEffect(() => {
  //   axios
  //     .get('http://localhost/backend/children/get.php', { params: { childID: sessionStorage.getItem("childId") } })
  //     .then((res) => {
  //       if(res.data != "Child name could not be loaded, try again later.")
  //       document.getElementById("hello-msg").innerHTML = "Hello " + res.data + "!";
  //     })
  // }, [])

  const { t } = useTranslation();

  const handleCheckboxChange = (e) => {
    const language = e.target.value;
    handleLanguageSelection(language);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    
    sessionStorage.setItem("parentId", -1);
    sessionStorage.setItem("childId", -1);
    window.location.href = '/signIn';
  };

  return (
    <div id="test">
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
          <a class="navbar-brand mar" href="/Home">ImaginationStation</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/Home">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
              <button type="submit" class="dropdown-item nav-link" onClick={handleLogout}>Logout</button>
              </li>
            </ul>
            

          </div>
        </nav>


      </div>
      <div id="hello-msg" class="name">
        
      </div>


    </div>
  );
}

export default Navigation;
