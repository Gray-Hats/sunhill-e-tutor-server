<?php

require_once('../config.php');

if(!isset($_POST['exercise'])) {
    echo json_encode(false);
    return;
}

$exercise = $_POST['exercise'];
$student = $_POST['student'];

try {
    $sql = "SELECT questions.uuid AS question_uuid, questions.question_no, questions.answer AS correct_answer, answers.answer as student_answer, CASE WHEN LOWER(questions.answer) = LOWER(answers.answer) THEN questions.points ELSE 0 END AS score FROM answers INNER JOIN questions ON answers.question=questions.uuid INNER JOIN exercises ON questions.exercise=exercises.uuid WHERE exercises.uuid='$exercise' AND answers.student='$student' ORDER BY questions.question_no";
    
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