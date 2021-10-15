const db = require("./connection");
const baseUri = "/api/exercise";

module.exports = initExercise = (app) => {

    //Get All Exercises
    app.get(baseUri + '/all', async (req, res) => {
        try {
            
            let sql = "SELECT * FROM exercises";
            
            db.query(sql, (err, result) => {
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

    //Get All Exercises by level
    app.post(baseUri + '/level', async (req, res) => {
        try {
            
            let level = req.body.level;
            
            let sql = "SELECT exercises.* FROM exercises INNER JOIN lessons ON exercises.lesson=lessons.uuid WHERE lessons.level=?";
            
            db.query(sql, [level], (err, result) => {
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

    //Get Exercises by lesson
    app.post(baseUri + '/lesson', async (req, res) => {
        try {
            let lesson = req.body.lesson;
            
            let sql = "SELECT * FROM exercises WHERE lesson=?";
            
            db.query(sql, [lesson], (err, result) => {
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


    //Get Exercise by uuid
    app.post(baseUri + '/get', async (req, res) => {
        try {
            let uuid = req.body.uuid;
            
            let sql = "SELECT * FROM exercises WHERE uuid=?";
            
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

    //Add new exercise
    app.post(baseUri + '/add', async (req, res) => {
        try {
            let uuid = req.body.uuid;
            let title = req.body.title;
            let total_score = req.body.total_score;
            let date_created = req.body.date_created;
            
            let sql = "INSERT INTO exercises VALUES(?,?,?,?)";
            
            db.query(sql, [uuid,title,total_score,date_created], (err, result) => {
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

    //Update exercise
    app.post(baseUri + '/update', async (req, res) => {
        try {
            let uuid = req.body.uuid;
            let title = req.body.title;
            let total_score = req.body.total_score;
            let date_created = req.body.date_created;
            
            let sql = "UPDATE exercises SET title=?, total_score=?, date_created=? WHERE uuid=?";
            
            db.query(sql, [title,total_score,date_created,uuid], (err, result) => {
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

    //Delete exercise
    app.post(baseUri + '/delete', async (req, res) => {
        try {
            let uuid = req.body.uuid;
            
            let sql = "DELETE FROM exercises WHERE uuid=?";
            
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