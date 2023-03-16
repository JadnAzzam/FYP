import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const handleSumbit = (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const fd = new FormData(form);

  axios.post('http://localhost/backend/login.php', fd).then(function (response) {
    console.log(response);
    document.getElementById("status").innerHTML= response.data;
  });
}

function SignInSignUpBox() {
  return (
    <div className="signInSignUpBox">
      <div className="signInSignUpBoxContent">
<<<<<<< HEAD
        <div className="signInSignUpBoxTitle">ImaginationStation</div>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit"><Link to="/home">Sign In</Link></button>
=======
        <div className="signInSignUpBoxTitle">FYP</div>
        <form 
          method="post"
          onSubmit={(event) => handleSumbit(event)}>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
>>>>>>> d2a05afc46dad5554931fada635944369769e6d8
        </form>
        <div className="signInSignUpBoxLink">
          Don't have an account? <Link to="/signup">Sign up.</Link>
        </div>
      </div>
      <p id="status"></p>
    </div>
  );
}

export default SignInSignUpBox;
