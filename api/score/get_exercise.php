<?php

require_once('../config.php');

if(!isset($_POST['exercise'])) {
    echo json_encode(false);
    return;
}

$exercise = $_POST['exercise'];

try {
    $sql = "SELECT * FROM scores WHERE exercise='$exercise'";
    
    $result = $db->query($sql);
    
    $emparray = array();
    while($row = $result->fetch_assoc()) {
        $emparray[] = $row;
    }
    echo json_encode($emparray);
}
catch (exception $e) {
    echo json_encode([]);
}

?>