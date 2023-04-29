<?php

header("Access-Control-Allow-Origin: *");

// Establishing database connection
require_once('../mysql_connect.php');

// Checking if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Get form data
  $childID = $_POST['childID'];
  $courseID = $_POST['courseID'];

  // Insert the new user into the database
  $sql = "DELETE FROM children_courses WHERE courseID=" . $courseID . " AND childrenID =  " .  $childID;


  if ($conn->query($sql) === TRUE) {
    echo "course removed from child list successfully!";
    exit();
  } else {  
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

// Close database connection
$conn->close();
