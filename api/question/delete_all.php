<?php

require_once('../config.php');
require('../helper.php');

if(!isset($_POST['exercise'])) {
    echo json_encode(false);
    return;
}

$exercise = $_POST['exercise'];

deleteFile("exercise/$exercise");

try {
    $sql = "DELETE FROM questions WHERE exercise='$exercise'";
    
    $result = $db->query($sql);
    
    echo json_encode($result);
}
catch (exception $e) {
    echo json_encode(false);
}

?>