<?php

require_once('../config.php');

if(!isset($_POST['uuid'])) {
    echo json_encode(false);
    return;
}

$uuid = $_POST['uuid'];
$title = $_POST['title'];
$totalScore = $_POST['totalScore'];
$dueDate = $_POST['dueDate'];

try {
    $sql = "INSERT INTO exercises VALUES('$uuid', '$title', $totalScore, '$dueDate')";
    
    $result = $db->query($sql);
    
    echo json_encode($result);
}
catch (exception $e) {
    echo json_encode(false);
}

?>