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
        <div className="signUpBoxTitle">ImaginationStation</div>
        <div className="signUpBoxSubtitle">Welcome to sign up page
        .</div>
        <form 
          method="post"
          onSubmit={(event) => handleSumbit(event)}>
            <input name="fullName" type="text" placeholder="Full Name" />
          <input name="username" type="text" placeholder="Username" />
          <input name= "email" type="email" placeholder="Email" />
          {/* <input type="tel" placeholder="Phone number" /> */}
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
        <div className="signUpBoxLink">
          Already have an account? <Link to="/signIn">Sign in.</Link>
        </div>
      </div>
      <p id="status"></p>
    </div>
  );
}

export default SignUpBox;
