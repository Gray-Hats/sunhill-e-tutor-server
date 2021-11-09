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

try {
    $sql = "INSERT INTO teachers SET lname='$lname', fname='$fname', mname='$mname', level='$level', username='$username' WHERE uuid='$uuid'";
    
    $result = $db->query($sql);
    
    echo json_encode($result);
}
catch (exception $e) {
    echo json_encode(false);
}

?>