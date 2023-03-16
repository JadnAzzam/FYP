import React from 'react';
import { Link } from 'react-router-dom';


function SignInSignUpBox() {
  return (
    <div className="signInSignUpBox">
      <div className="signInSignUpBoxContent">
        <div className="signInSignUpBoxTitle">ImaginationStation</div>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit"><Link to="/home">Sign In</Link></button>
        </form>
        <div className="signInSignUpBoxLink">
          Don’t have an account? <Link to="/signup">Sign up.</Link>
        </div>
      </div>
    </div>
  );
}

export default SignInSignUpBox;
