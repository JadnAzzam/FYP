import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
const handleSumbit = (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const fd = new FormData(form);

  axios.post('http://localhost/backend/parents/register.php', fd).then(function (response) {
    //console.log(response);
    //document.getElementById("status").innerHTML= response.data;
    window.location.href= "/signIn";
  });
}

function SignUpBox() {
  return (
    <div className="signUpBox">
      <div className="signUpBoxContent">
        <h1 className="signUpBoxTitle">ImaginationStation</h1>
        <h6 className="signUpBoxSubtitle">Welcome to the sign up page.</h6>
        <form 
          method="post"
          onSubmit={(event) => handleSumbit(event)}>
          <input name="fullName" type="text" placeholder="Full Name" />
          <input name="username" type="text" placeholder="Username" />
          <input name= "email" type="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
          <p className="signUpBoxLink">
            Already have an account? <Link to="/signIn">Sign in.</Link>
          </p>
        </form>
        
      </div>
    </div>
  );
}

export default SignUpBox;
