const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config');

const initLevels = require('./db/levels');
const initStudent = require('./db/students');
const initLesson = require('./db/lessons');
const initExercise = require('./db/exercises');
const initQuestion = require('./db/questions');

app.use(cors());
app.use(express.json());

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