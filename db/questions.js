const db = require("./connection");
const baseUri = "/api/question";

module.exports = initQuestion = (app) => {
    
    //Get Questions by Exercise
    app.post(baseUri + '/exercise', async (req, res) => {
        try {
            let exercise = req.body.exercise;
            
            let sql = "SELECT * FROM questions WHERE exercise=?";
            
            db.query(sql, [exercise], (err, result) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                }
                else {
                    res.json(result);
                }
            });
        }
        catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    });

    //Add Question
    app.post(baseUri + '/add', async (req, res) => {
        try {
            let uuid = req.body.uuid;
            let question_no = req.body.question_no;
            let exercise = req.body.exercise;
            let type = req.body.type;
            let description = req.body.description;
            let answer = req.body.answer;
            let choices = req.body.choices;
            
            let sql = "INSERT INTO questions VALUES(?,?,?,?,?,?,?)";
            
            db.query(sql, [uuid,question_no,exercise,type,description,answer,choices], (err, result) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                }
                else {
                    res.json(result);
                }
            });
        }
        catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    });

    //Update Question
    app.post(baseUri + '/update', async (req, res) => {
        try {
            let uuid = req.body.uuid;
            let question_no = req.body.question_no;
            let exercise = req.body.exercise;
            let type = req.body.type;
            let description = req.body.description;
            let answer = req.body.answer;
            let choices = req.body.choices;
            
            let sql = "UPDATE questions SET question_no=?, exercise=?, type=?, description=?, answer=?, choices=? WHERE uuid=?";
            
            db.query(sql, [question_no,exercise,type,description,answer,choices,uuid], (err, result) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                }
                else {
                    res.json(result);
                }
            });
        }
        catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    });

    //Delete Question
    app.post(baseUri + '/delete', async (req, res) => {
        try {
            let uuid = req.body.uuid;
            
            let sql = "DELETE FROM questions WHERE uuid=?";
            
            db.query(sql, [uuid], (err, result) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                }
                else {
                    res.json(result);
                }
            });
        }
        catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    });
}