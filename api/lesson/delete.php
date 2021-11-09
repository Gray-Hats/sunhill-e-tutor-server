<?php

require_once('../config.php');
require('../helper.php');

if(!isset($_POST['uuid'])) {
    echo json_encode(false);
    return;
}

$uuid = $_POST['uuid'];
$bucketName = $_POST['bucketName'];

try {

    $delete = deleteFile($bucketName);

    if($delete){
        
        $sql = "DELETE FROM lessons WHERE uuid='$uuid'";
    
        $result = $db->query($sql);
        
        echo json_encode($result);
    }
    else {
        echo json_decode(false);
    }
}
catch (exception $e) {
    echo json_encode(false);
}


?>