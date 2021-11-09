<?php

require_once('../config.php');

if(!isset($_POST['uuid'])) {
    echo json_encode(false);
    return;
}

$uuid = $_POST['uuid'];
$title = $_POST['title'];
$dueDate = $_POST['dueDate'];
$level = $_POST['level'];

try {
    $sql = "INSERT INTO exercises VALUES('$uuid', '$title', '$dueDate', '$level')";
    
    $result = $db->query($sql);
    
    echo json_encode($result);
}
catch (exception $e) {
    echo json_encode(false);
}

?>