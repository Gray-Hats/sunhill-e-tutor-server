<?php

require_once('../config.php');

if(!isset($_POST['level'])) {
    echo json_encode(false);
    return;
}

$level = $_POST['level'];

try {
    $sql = "SELECT * FROM students WHERE level='$level'";
    
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