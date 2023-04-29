<?php

header("Access-Control-Allow-Origin: *");

// Establishing database connection
require_once('../mysql_connect.php');

// Checking if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $courseID = $_GET['courseID'];

    // Insert the new user into the database
    $sql = "SELECT * FROM courses WHERE Id = " . $courseID;

    $result = $conn->query($sql);


    if ($result->num_rows > 0) {
        $rows = array();
        while ($r = $result->fetch_assoc()) {
            $rows[] = $r;
        }
        print json_encode($rows);
    } else {
        echo "Course could not be loaded, try again later.";
    }
}

// Close database connection
$conn->close();
