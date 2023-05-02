import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {



  const [children, setChildren] = useState([]);
  useEffect(() => {
    if(sessionStorage.getItem("parentId") == -1)
    window.location.href = '/signIn';

    axios
      .get('http://localhost/backend/children/list.php', { params: { parentId:  sessionStorage.getItem("parentId") } })
      .then((res) => {
        setChildren(res.data);
      });
  }, []);

  const handleSumbit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);

    axios
      .post('http://localhost/backend/children/create.php', fd)
      .then(function (response) {
        window.location.href = '/Dashboard';
      });
  };


  const handleDelete = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    axios
      .post('http://localhost/backend/children/delete.php', fd)
      .then(function (response) {
        window.location.href = '/Dashboard';
      });
  };

  return (
    <div>
      <Navbar>
        <Navigation />
      </Navbar>

      <div className="container">
        <div className="registrationForm">
          <h2>Child form</h2>
          <form method="post" onSubmit={handleSumbit}>
            <input id="parentIdField" hidden name="parentId" value={sessionStorage.getItem("parentId")} />
            <div className="form-group">
              <input name="fullName" type="text" placeholder="Full Name" className="form-control" />
            </div>
            <div className="form-group">
              <input name="username" type="text" placeholder="Username" className="form-control" />
            </div>
            <div className="form-group">
              <input name="password" type="password" placeholder="Password" className="form-control" />
            </div>
            <div className="form-group">
              <label>Language:</label>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="english" name="English" value="english" />
                <label className="form-check-label" htmlFor="english">English</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="arabic" name="Arabic" value="arabic" />
                <label className="form-check-label" htmlFor="arabic">Arabic</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="french" name="French" value="french" />
                <label className="form-check-label" htmlFor="french">French</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Register Child</button>
          </form>
        </div>

        <div className="registeredChildrenTable">
          <h2>All Registered Children</h2>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Username</th>
                <th>Language</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {children.map((child) => (
                <tr key={child.Id}>
                  <td>{child.fullName}</td>
                  <td>{
                    child.username}</td>
                    <td>{child.language}</td>
                    <td>
                    <button className="actionBtn">Edit</button>
                    <form onSubmit={handleDelete}>
                    <input name="childID" type="hidden" value={child.Id} />
                    <button type="submit" className="actionBtn">Remove</button>
                    </form>
                    </td>
                    </tr>
                    ))}
                    </tbody>
                    </table>
                    </div>
                    </div>
                    <Footer />
</div>
);
};

export default Dashboard;
