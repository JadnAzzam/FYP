import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Navigation';
import Footer from './Footer';
import axios from "axios";
import { Link } from 'react-router-dom';

const CourseDetails = () => {

  const [courses, setCourses] = React.useState([])
  const [activities, setActivities] = React.useState([])
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const courseid = urlParams.get("courseID");
 
  useEffect(() => {
    axios
      .get('http://localhost/backend/courses/get.php', {params:{courseID:courseid}})
      .then((res) => {
        setCourses(res.data)
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost/backend/activities/list.php', {params:{courseID:courseid}})
      .then((res) => {
        setActivities(res.data)
      })
  }, [])

  console.log("hello");
  console.log(activities);
  
  return (
    <div>
      <Navbar>
        <Navigation />
      </Navbar>

      {courses.map(course => (
          <div>
              <p>{course.name}</p>
              <div dangerouslySetInnerHTML={{__html: course.description}}/>
              <ul>
              {activities.map(activity => (
                <li>{activity.name_en} <Link to={`/Activity?activityID=${activity.Id}`}> Access now! </Link></li>
                ))}
              </ul>
          </div>
        ))}

        <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CourseDetails;
