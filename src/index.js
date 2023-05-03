import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import SignInSignUpBox from './SignInSignUpBox';
import HomePage from './HomePage';
import SignUpBox from './SignUpBox';
// import CodingVideo from './DrPandaYt';
import VideoPlayer from './DrPandaYt';
import Britishmusuem from './Britishmusuem';
import Dashboard from './Dashboard';
// import Coding from './coding';
import SesameStreet from './SesameStreet';
import Games from './Games';
import CourseDetails from './CourseDetails';
import Activity from './Activity';
import Education from './Education';
import DisneyJr from './DisneyJr';
import NationalGeoKids from './NationalGeoKids';
import DIY from './DIY';
import ScieneceExperimentsAr from './ScieneceExperimentsAr';
import ArGames from './ArGames';
import './i18next';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ABTar from './ABTar';
import YtArAnimals from './YtArAnimals';
import FrVirtualTour from './FrVirtualTour';
import PetitFr from './PetitFr';
import TF1Fr from './TF1Fr';
import PapppaPigYtFr from './PappaPigYtFr';
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
      <Route exact path="/DrPandaYt">
        <VideoPlayer />
      </Route>
      <Route exact path="/SesameStreet">
        <SesameStreet/>
      </Route>
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
      <Route exact path="/Education">
        <Education />
      </Route>
      <Route exact path="/DisneyJr">
        <DisneyJr />
        </Route>
        <Route exact path="/NationalGeoKids">
        <NationalGeoKids/>
        </Route>
        <Route exact path="/DIY">
        <DIY/>
        </Route>
        <Route exact path="/ScAr">
        <ScieneceExperimentsAr/>
        </Route>
        <Route exact path="/GamesAr">
        <ArGames/>
        </Route>
        <Route exact path="/ABTar">
        <ABTar/>
        </Route>
        <Route exact path="/YTArAnimals">
        <YtArAnimals/>
        </Route>
        <Route exact path="/FrVirtualTour">
        <FrVirtualTour/>
        </Route>
        <Route exact path="/PetitFr">
        <PetitFr/>
        </Route>
        <Route exact path="/TF1Fr">
        <TF1Fr/>
        </Route>
        <Route exact path="/PappaPigYtFr">
        <PapppaPigYtFr/>
        </Route>
      
    </Switch>
  </Router>
   </Suspense>,
  
  document.getElementById('root')
);