<?php

require_once('../config.php');

if(!isset($_POST['student'])) {
    echo json_encode(false);
    return;
}

$student = $_POST['student'];
$question = $_POST['question'];
$answer = $_POST['answer'];

try {
    $sql = "INSERT INTO answers VALUES('$student', '$question', '$answer')";
    
    $result = $db->query($sql);
    
    echo json_encode($result);
}
catch (exception $e) {
    echo json_encode(false);
}
?>