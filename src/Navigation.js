import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import './Navigation.css';


function Navigation() {

  const { t, i18n } = useTranslation();
  const [selectedLanguages, setSelectedLanguages] = React.useState([]);


  // function handleClick(lang){
  //   i18n.changeLanguage(lang);
  // }

  function handleCheckboxChange(e) {
    const language = e.target.value;
    const isChecked = e.target.checked;
  
    setSelectedLanguages(prevSelectedLanguages => {
      if (isChecked) {
        return [...prevSelectedLanguages, language];
      } else {
        return prevSelectedLanguages.filter(lang => lang !== language);
      }
    });
  
    // Updated logic for setting the displayed language
    const updateDisplayedLanguage = (languages) => {
      if (languages.length === 0) {
        i18n.changeLanguage('en');
      } else if (languages.length === 3 || languages.includes('en')) {
        i18n.changeLanguage('en');
      } else if (languages.includes('ar') && languages.includes('fr')) {
        i18n.changeLanguage('ar');
      } else if (languages.length === 1) {
        i18n.changeLanguage(languages[0]);
      } else {
        i18n.changeLanguage('en'); // Default fallback
      }
    };
  
    // Call the updateDisplayedLanguage function with the new selectedLanguages state
    updateDisplayedLanguage(
      isChecked
        ? [...selectedLanguages, language]
        : selectedLanguages.filter(lang => lang !== language)
    );
  }
  
  
  

  return (
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

    
  );
  

}
        
export default Navigation;
