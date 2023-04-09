import React, { useState } from 'react';
import './App.css';
import SignInSignUpBox from './SignInSignUpBox';
import HomePage from './HomePage';
import SignUpPage from './SignUpPage';
import Navigation from './Navigation';



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };
  

  return (
    <div className="App">
      {loggedIn ? (
        <HomePage username={username} handleLogout={handleLogout} />
      ) : (
        <SignInSignUpBox handleLogin={handleLogin} />
      )}
      <SignUpPage handleLogin={handleLogin} />
    </div>
  );
}

export default App;
