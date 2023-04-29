<?php

$host = "localhost";
$port = 3306;
$username1 = "root";
$password1 = "";
$database = "childsweb";

// Create connection
$conn = new mysqli ($host, $username1, $password1, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 

?>
