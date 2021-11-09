<?php

require_once('../config.php');

if(!isset($_POST['uuid'])) {
    echo json_encode(false);
    return;
}

$uuid = $_POST['uuid'];
$lname = $_POST['lname'];
$fname = $_POST['fname'];
$mname = $_POST['mname'];
$level = $_POST['level'];
$username = $_POST['username'];
$password = $_POST['password'];
$account_type = $_POST['account_type'];

try {
    $sql = "INSERT INTO teachers VALUES('$uuid', '$lname', '$fname', '$mname', '$level', '$username', '$password', '$account_type')";
    
    $result = $db->query($sql);
    
    echo json_encode($result);
}
catch (exception $e) {
    echo json_encode(false);
}

?>