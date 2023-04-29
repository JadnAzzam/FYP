<?php

header("Access-Control-Allow-Origin: *");

// Establishing database connection
require_once('../mysql_connect.php');

// Checking if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $activityID = $_GET['activityID'];

    // Insert the new user into the database
    $sql = "SELECT * FROM activities WHERE Id = " . $activityID;

    $result = $conn->query($sql);


    if ($result->num_rows > 0) {
        $rows = array();
        while ($r = $result->fetch_assoc()) {
            $rows[] = $r;
        }
        print json_encode($rows);
    } else {
        echo "Activity could not be loaded, try again later.";
    }
}

// Close database connection
$conn->close();
