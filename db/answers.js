const db = require("./connection");
const baseUri = "/api/answers";

module.exports = initAnswers = (app) => {

    //Get all answers of exercise
    app.post(baseUri + '/exercise', async (req, res) => {
        try {
            
            let exercise = req.body.exercise;
            
            let sql = "SELECT answers.*, questions.description FROM answers INNER JOIN questions ON answers.question = questions.uuid WHERE questions.exercise=?";
            
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
}