import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';


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
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#action">ImaginationStation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <NavDropdown title="dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Categories</NavDropdown.Item>
              <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/signin">
                LogOut
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        {/* <div>
        <button onClick={()=>handleClick('en')}>English</button>
        <button onClick={()=>handleClick('ar')}>Arabic</button>
        <button onClick={()=>handleClick('fr')}>French</button>
        </div> */}

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


        <p>{t('Hello')}</p>
        
      </Container>
      
    </Navbar>
    
  );
  

}
        
      


export default Navigation;
