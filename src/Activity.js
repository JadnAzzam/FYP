import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';
import axios from "axios";
import { Link } from 'react-router-dom';

const Activity = () => {

 
  const [activities, setActivities] = React.useState([])
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const activityid = urlParams.get("activityID");
 
 

  useEffect(() => {
    axios
      .get('http://localhost/backend/activities/get.php', {params:{activityID:activityid}})
      .then((res) => {
        setActivities(res.data)
      })
  }, [])


  console.log(activities);
  
  return (
    <div>
      <Navbar>
        <Navigation />
      </Navbar>

      {activities.map(activity => (
          <div>
              
                <h2>{activity.name_en}</h2>
                <div dangerouslySetInnerHTML={{__html: activity.content_en}}/>

                
          </div>
        ))}

        <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Activity;
