<?php

require_once('../config.php');

if(!isset($_POST['uuid'])) {
    echo json_encode(false);
    return;
}

$uuid = $_POST['uuid'];
$studentNo = $_POST['studentNo'];
$lname = $_POST['lname'];
$fname = $_POST['fname'];
$mname = $_POST['mname'];
$level = $_POST['level'];
$password = $_POST['password'];

try {
    $sql = "INSERT INTO students VALUES('$uuid', '$studentNo', '$lname', '$fname', '$mname', '$level', '$password')";
    
    $result = $db->query($sql);
    
    echo json_encode($result);
}
catch (exception $e) {
    echo json_encode(false);
}

?>