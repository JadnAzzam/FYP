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
  $parentId = $_POST['parentId'];
  $language = $_POST['language'];

  // Hashing the password before storing it in the database
  $hashed_password = password_hash($password, PASSWORD_DEFAULT);

  // Insert the new user into the database
  $sql = "INSERT INTO childrens (fullName, username, password, parentId, language) VALUES ('"
    . $fullName . "' , '" . $username . "' , '" . $hashed_password . "' , " . $parentId . " , '" . $language . "')";

  if ($conn->query($sql) === TRUE) {
    echo "child created successfully!";
    exit();
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

// Close database connection
$conn->close();
