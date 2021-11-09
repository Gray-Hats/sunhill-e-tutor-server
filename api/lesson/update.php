<?php

require_once('../config.php');

if(!isset($_POST['uuid'])) {
    echo json_encode(false);
    return;
}

$uuid = $_POST['uuid'];
$title = $_POST['title'];
$description = $_POST['description'];
$level = $_POST['level'];

try {
    $sql = "UPDATE lessons SET title='$title', description='$description', level='$level' WHERE uuid='$uuid'";
    
    $result = $db->query($sql);
    
    echo json_encode($result);
}
catch (exception $e) {
    echo json_encode(false);
}

?>