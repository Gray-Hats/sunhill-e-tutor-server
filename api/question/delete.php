<?php

require_once('../config.php');
require('../helper.php');

if(!isset($_POST['uuid'])) {
    echo json_encode(false);
    return;
}

$uuid = $_POST['uuid'];
$bucketName = $_POST['bucketName'];

if($bucketName) {
    deleteFile($bucketName);
}

try {
    $sql = "DELETE FROM questions WHERE uuid='$uuid'";
    
    $result = $db->query($sql);
    
    echo json_encode($result);
}
catch (exception $e) {
    echo json_encode(false);
}

?>