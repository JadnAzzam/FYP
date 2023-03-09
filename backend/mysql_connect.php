<?php

$host = "localhost";
$username = "root";
$password = "";
$database = "childsweb";

// Create connection
$conn = new mysqli($host, $username, $password, $database, 3306);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 

?>
