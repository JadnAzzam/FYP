<?php

header("Access-Control-Allow-Origin: *");

// Establishing database connection
require_once('../mysql_connect.php');

// Checking if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Get form data
  $fullName = $_POST['fullName'];
  $username = $_POST['username'];
  $password = $_POST['password'];
  $language = $_POST['language'];
  $childID = $_POST['childID'];

  // Hashing the password before storing it in the database
  $hashed_password = password_hash($password, PASSWORD_DEFAULT);

  // Insert the new user into the database
  $sql = "UPDATE childrens SET fullName = '" . $fullName . "', username = '"
    . $username . "', password = '" . $hashed_password . "', language = '" . $language . "' WHERE Id = " . $childID;


  if ($conn->query($sql) === TRUE) {
    echo "child updated successfully!";
    exit();
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

// Close database connection
$conn->close();
