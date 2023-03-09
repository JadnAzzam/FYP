<?php

// Establishing database connection
require_once('db_connect.php');

// Checking if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Get form data
  $username = $_POST['username'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $password = $_POST['password'];

  // Hashing the password before storing it in the database
  $hashed_password = password_hash($password, PASSWORD_DEFAULT);

  // Insert the new user into the database
  $sql = "INSERT INTO persons (username, email, phone,password) VALUES ('$username','$email','$phone', '$hashed_password')";
  if ($conn->query($sql) === TRUE) {
    // Redirect to success page
    header("Location: success.php");
    exit();
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

// Close database connection
$conn->close();

?>
