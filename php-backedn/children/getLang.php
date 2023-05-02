<?php

header("Access-Control-Allow-Origin: *");

// Establishing database connection
require_once('../mysql_connect.php');

// Checking if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $childID = $_GET['childID'];

    // Insert the new user into the database
    $sql = "SELECT * FROM childrens WHERE Id = " . $childID;

    $result = $conn->query($sql);

if ($result->num_rows > 0) {
        $rows = array();
        while ($r = $result->fetch_assoc()) {
            echo $r["language"];
	break;
        }
        
    } else {

    
        echo "Child name could not be loaded, try again later.";
    }
}

// Close database connection
$conn->close();
