<?php

header("Access-Control-Allow-Origin: *");

// Establishing database connection
require_once('../mysql_connect.php');

// Checking if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Get form data
 // $fullName = isset($_POST['fullName']) ? $_POST['fullName'] : '';
  //$username = isset($_POST['username']) ? $_POST['username'] : '';
 // $password = isset($_POST['password']) ? $_POST['password'] : '';
  //$parentId = isset($_POST['parentId']) ? $_POST['parentId'] : '';
 // $language = isset($_POST['language']) ? $_POST['language'] : '';
$fullName = $_POST['fullName'];
$username = $_POST['username'];
 $password =$_POST['password'];
 $parentId = $_POST['parentId'];
$english = $_POST['English'];
$arabic = $_POST['Arabic'];
$french = $_POST['French'];
$language = "";
if (!empty($english))
	$language .= "en";
if (!empty($arabic))
{
	if(strlen($language) == 0)
		$language .= "ar";
	else
		$language .= ",ar";
}
if(!empty($french)){
	if(strlen($language) == 0)
		$language .= "fr";
	else
		$language .= ",fr";
}
	 
//$language = "en";

  // Validating form data
 /* if (empty($fullName) || empty($username) || empty($password) || empty($parentId) || empty($language)) {
    echo "Error: Please fill in all the fields";
    exit();
  }*/

  // Hashing the password before storing it in the database
  $hashed_password = password_hash($password, PASSWORD_DEFAULT);

  // Insert the new user into the database
  $sql = "INSERT INTO childrens (fullName, username, password, parentId, language) VALUES ('" . $fullName . "' , '" . $username . "' , '" . $hashed_password . "' , " . $parentId . " , '" . $language . "')";

  if ($conn->query($sql) === TRUE) {
    echo "child created successfully!";
    exit();
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

// Close database connection
$conn->close();
