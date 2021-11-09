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

    $upload = uploadFile($_FILES, "exercise/$exercise");

    if($upload) {

        try {
            $sql = "INSERT INTO questions VALUES('$uuid', '$questionNo', '$exercise', '$type', '$description', '$answer', '$choices', $points , '$upload->url', '$upload->bucket_name') ";
            
            $result = $db->query($sql);
            
            echo json_encode($result);
        }
        catch (exception $e) {
            echo json_encode(false);
        }
    }
    else {
        echo json_encode(false);
    }

}
else {
    try {
        $sql = "INSERT INTO questions VALUES('$uuid', '$questionNo', '$exercise', '$type', '$description', '$answer', '$choices', '$points' , '', '') ";
        
        $result = $db->query($sql);
        
        echo json_encode($result);
    }
    catch (exception $e) {
        echo json_encode(false);
    }
}

?>