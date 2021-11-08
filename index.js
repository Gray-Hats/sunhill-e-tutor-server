const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
const cors = require('cors');
const config = require('./config');

const initLevels = require('./db/levels');
const initStudent = require('./db/students');
const initLesson = require('./db/lessons');
const initExercise = require('./db/exercises');
const initQuestion = require('./db/questions');
const initTeacher = require('./db/teachers');

app.use(cors());
app.use(express.json());
app.use(fileUpload());


/*
* PORT
*/
app.listen(config.port, () => {
    console.log("Sunhill server is running...");
});

initLevels(app);
initStudent(app);
initLesson(app);
initExercise(app);
initQuestion(app);
initTeacher(app);