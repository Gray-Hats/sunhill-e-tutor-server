<?php

require_once('../config.php');
require('../helper.php');

if(!isset($_POST['uuid'])) {
    echo json_encode(false);
    return;
}

$uuid = $_POST['uuid'];
$title = $_POST['title'];
$description = $_POST['description'];
$level = $_POST['level'];

try {

    $upload = uploadFile($_FILES, "lessons/$level");

    if($upload) {
        
        $sql = "INSERT INTO lessons VALUES('$uuid', '$title', '$description', '$level', '$upload->url', '$upload->bucket_name')";
    
        $result = $db->query($sql);
        
        echo json_encode($result);
    }
    else {
        echo json_encode(false);
    }
}
catch (exception $e) {
    echo json_encode(false);
}

?>