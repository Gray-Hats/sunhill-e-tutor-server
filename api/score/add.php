<?php

require_once('../config.php');

if(!isset($_POST['student'])) {
    echo json_encode(false);
    return;
}

$student = $_POST['student'];
$exercise = $_POST['exercise'];
$score = $_POST['score'];

try {
    $sql = "INSERT INTO scores VALUES('$student', '$exercise', $score)";
    
    $result = $db->query($sql);
    
    echo json_encode($result);
}
catch (exception $e) {
    echo json_encode(false);
}

?>