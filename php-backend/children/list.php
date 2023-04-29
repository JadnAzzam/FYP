<?php

header("Access-Control-Allow-Origin: *");

// Establishing database connection
require_once('../mysql_connect.php');

// Checking if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  // Get form data
  $parentId = $_GET['parentId'];

  // Insert the new user into the database
  $sql = "SELECT * FROM childrens WHERE parentId =" . $parentId;

  $result = $conn->query($sql);
  //print_r($result);
 $rows = array();
  if ($result->num_rows > 0) {
   
    while ($r = $result->fetch_assoc()) {
      $rows[] = $r;
    }
}
    print json_encode($rows);
  
}

// Close database connection
$conn->close();
