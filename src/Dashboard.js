import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';
import axios from "axios";
import { Link } from 'react-router-dom';



const handleSumbit = (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const fd = new FormData(form);

  axios.post('http://localhost/backend/children/create.php', fd).then(function (response) {
    //console.log(response);
    //document.getElementById("status").innerHTML= response.data;
    window.location.href= "/Dashboard";
  });
}

const handleDelete = (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const fd = new FormData(form);

  axios.post('http://localhost/backend/children/delete.php', fd).then(function (response) {
    //console.log(response);
    //document.getElementById("status").innerHTML= response.data;
    window.location.href= "/Dashboard";
  });
}

const Dashboard = () => {
  const [children, setChildren] = React.useState([])
  useEffect(() => {
    axios
      .get('http://localhost/backend/children/list.php', {params:{parentId:6}})  //static 
      .then((res) => {
        setChildren(res.data)
      })
  }, [])

  return (
    <div>
      <Navbar>
        <Navigation />
      </Navbar>

      <div className="">
    
        <form 
          method="post"
          onSubmit={(event) => handleSumbit(event)}>
            <input name="fullName" type="text" placeholder="Full Name" />
            <input name="parentId" type="hidden" value="6" /> 
          <input name="username" type="text" placeholder="Username" />
          {/* <input type="tel" placeholder="Phone number" /> */}
          <input name="password" type="password" placeholder="Password" />
          <select id="languageSelector" name="language" className="role">
            <option value="en" >English </option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
          </select>
          <button type="submit">Add My Bundle of Joy!</button>
        </form>
      
      <p id="status"></p>
    </div>
    <div>
      <h2>All Registed Children</h2>
      <table>
        <tr>
          <th>Full Name</th>
          <th>Username</th>
          <th>Language</th>
          <th>Actions</th>
        </tr>
        {children.map(child => (
          <tr>
            <td>{child.fullName}</td>
            <td>{child.username}</td>
            <td>{child.language}</td>
            <td>View Edit
              <form id="deleteForm"  method="post" onSubmit={(event) => handleDelete(event)} > 
                <input name="childID" type="hidden" value={`${child.Id}`} />
                <button  type="submit">Remove</button> </form>
            </td>
          </tr>
        
        ))}
      </table>
    </div>

        <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Dashboard;
