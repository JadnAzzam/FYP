import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const handleSumbit = (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const fd = new FormData(form);


  var e = document.getElementById("roleSelector");
  var value = e.value;

  if (value == "parent") {

    axios.post('http://localhost/backend/parents/login.php', fd).then(function (response) {
      if (response.data == "password is wrong" || response.data == "User not found") {

        document.getElementById("status").innerHTML = response.data;
      }
      else {
        console.log(response.data);

        sessionStorage.setItem("parentId", -1);
        sessionStorage.setItem("childId", -1);
        var id = parseInt(response.data)
        sessionStorage.setItem("parentId", id);
        window.location.href = "/dashboard";
      }

    });
  } else {
    axios.post('http://localhost/backend/children/login.php', fd).then(function (response) {


      if (response.data == "password is wrong" || response.data == "User not found") {

        document.getElementById("status").innerHTML = response.data;
      }
      else {
        //console.log(response.data);
        sessionStorage.setItem("parentId", -1);
        sessionStorage.setItem("childId", -1);
        var id = parseInt(response.data)
        sessionStorage.setItem("childId", id);
        window.location.href = "/Home";
      }


    });
  }


}

function SignInSignUpBox() {
  return (
    <div className="signInSignUpBox">
      <div className="signInSignUpBoxContent">
        <h1 className="signInSignUpBoxTitle">ImaginationStation</h1>
        <form method="post"
          onSubmit={(event) => handleSumbit(event)}>
          <input name="username" type="text" placeholder="Username" />
          <select id="roleSelector" className="role">
            <option value="parent" >Parent </option>
            <option value="child">Child</option>
          </select>
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
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
