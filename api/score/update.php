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
    $sql = "UPDATE scores SET score=$score WHERE student='$student' AND exercise='$exercise'";
    
    $result = $db->query($sql);
    
    echo json_encode($result);
}
catch (exception $e) {
    echo json_encode(false);
}

?>