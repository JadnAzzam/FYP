import React from 'react';
import { Link } from 'react-router-dom';


function SignUpBox() {
  return (
    <div className="signUpBox">
      <div className="signUpBoxContent">
        <div className="signUpBoxTitle">ImaginationStation</div>
        <div className="signUpBoxSubtitle">Welcome to sign up page.</div>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone number" />
          <input type="password" placeholder="Password" />
          <button type="submit"><Link to="/">Sign Up</Link></button>
        </form>
        <div className="signUpBoxLink">
          Already have an account? <Link to="/signIn">Sign in.</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpBox;
