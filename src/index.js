import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import SignInSignUpBox from './SignInSignUpBox';
import HomePage from './HomePage';
import SignUpBox from './SignUpBox';
import CodingVideo from './VirtualTour';
import Britishmusuem from './Britishmusuem';
import Dashboard from './Dashboard';
// import Coding from './coding';
import Games from './Games';
import CourseDetails from './CourseDetails';
import Activity from './Activity';
import './i18next';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import ScratchEditor from './scratcheditor';
// import Dashboard from './Dashboard';



ReactDOM.render(
  <Suspense fallback={(<div>Loading~~~</div>)}>
    

  <Router>
    <Switch>
      <Route exact path="/">
        <SignUpBox />
      </Route>
      <Route exact path="/home">
        <HomePage />
      </Route>
      <Route exact path="/signup">
        <SignUpBox />
      </Route>
      <Route exact path="/signin">
        <SignInSignUpBox />
      </Route>
      <Route exact path="/Virtual">
        <CodingVideo />
      </Route>
      {/* <Route exact path="/coding">
        <Coding/>
      </Route> */}
      {/* <Route exact path="/scratcheditor">
        <ScratchEditor/>
      </Route> */}
      <Route exact path="/Britishmusuem">
        <Britishmusuem/>
      </Route>
      <Route exact path="/Games">
        <Games/>
      </Route>
      <Route exact path="/CourseDetails">
        <CourseDetails/>
      </Route>
      <Route exact path="/Activity">
        <Activity/>
      </Route>
      <Route exact path="/Dashboard">
        <Dashboard />
      </Route>
    </Switch>
  </Router>,
  
   </Suspense>, 
  
  document.getElementById('root')
);