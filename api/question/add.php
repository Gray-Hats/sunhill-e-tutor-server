<?php

require_once('../config.php');
require('../helper.php');

if(!isset($_POST['uuid'])) {
    echo json_encode(false);
    return;
}

$uuid = $_POST['uuid'];
$questionNo = $_POST['questionNo'];
$exercise = $_POST['exercise'];
$type = $_POST['type'];
$description = $_POST['description'];
$answer = $_POST['answer'];
$choices = $_POST['choices'];
$points = $_POST['points'];

if($type == "image") {
    
}

?>