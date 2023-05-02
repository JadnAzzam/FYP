<?php

header("Access-Control-Allow-Origin: *");

// Establishing database connection
require_once('../mysql_connect.php');

// Checking if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Get form data
  $username = $_POST['username'];
  $password = $_POST['password'];
  $fullName = $_POST['fullName'];
  $email = $_POST['email'];

  // Hashing the password before storing it in the database
  $hashed_password = password_hash($password, PASSWORD_DEFAULT);

  // Insert the new user into the database
  $sql = "INSERT INTO parents (fullName, email, username, password) VALUES ('" . $fullName . "' , '" . $email . "', '" . $username . "' , '" . $hashed_password . "')";
  if ($conn->query($sql) === TRUE) {
    // Redirect to success page
    echo "registered successfully!";
    exit();
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

// Close database connection
$conn->close();
