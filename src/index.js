import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import SignInSignUpBox from './SignInSignUpBox';
import HomePage from './HomePage';
import SignUpBox from './SignUpBox';
import './App.css';

ReactDOM.render(
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
    </Switch>
  </Router>,
  document.getElementById('root')
);