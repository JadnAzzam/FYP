<?php

header("Access-Control-Allow-Origin: *");

// Establishing database connection
require_once('../mysql_connect.php');

// Checking if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Get form data
  $childrenID = $_POST['childID'];
  $courseID = $_POST['courseID'];
  // Insert the new user into the database
  $sql = "INSERT INTO children_courses (childrenID, courseID) VALUES (" . $childrenID . " , " . $courseID .  ")";

  if ($conn->query($sql) === TRUE) {
    echo "course added to child successfully!";
    exit();
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

// Close database connection
$conn->close();
