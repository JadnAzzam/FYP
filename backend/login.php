<?php

// Start session
session_start();

// Establish database connection
require_once('mysql_connect.php');

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Get form data
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Check if the user exists
  $sql = "SELECT * FROM users WHERE username = '$username'";
  $result = $conn->query($sql);
  if ($result->num_rows == 1) {
    // Verify the password
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
      // Login successful
      $_SESSION['username'] = $username;
      //header("Location: dashboard.php");
      exit();
    } else {
      // Password is incorrect
      $error = "Incorrect password";
    }
  } else {
    // User not found
    $error = "User not found";
  }
}

// Close database connection
$conn->close();

?>
