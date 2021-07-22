const db = require("./connection");
const baseUri = "/api/lesson";

module.exports = initStudent = (app) => {
    
    //Get All Lessons
    app.get(baseUri + '/all', async (req, res) => {
        try {
            
            let sql = "SELECT * FROM lessons";

            db.query(sql, (err, result) => {
                if(err){
                    console.log(err);
                    res.sendStatus(500);
                }
                else{
                    res.json(result);
                }
            });
        } 
        catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    });

    //Get Lesson by Section
    app.post(baseUri + '/section', async (req, res) => {
        try {
            let section = req.body.section;

            let sql = "SELECT * FROM lessons WHERE section=?";

            db.query(sql, [section], (err, result) => {
                if(err){
                    console.log(err);
                    res.sendStatus(500);
                }
                else{
                    res.json(result);
                }
            });
        } 
        catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    });

    //Add Lesson
    app.post(baseUri + '/add', async (req, res) => {
        try {
            let uuid = req.body.uuid;
            let title = req.body.title;
            let uri = req.body.uri;
            let section = req.body.section;

            let sql = "INSERT INTO lessons VALUES(?,?,?,?)";

            db.query(sql, [uuid,title,uri,section], (err, result) => {
                if(err){
                    console.log(err);
                    res.sendStatus(500);
                }
                else{
                    res.json(result);
                }
            });
        } 
        catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    });

    //Update Lesson
    app.post(baseUri + '/update', async (req, res) => {
        try {
            let uuid = req.body.uuid;
            let title = req.body.title;
            let uri = req.body.uri;
            let section = req.body.section;

            let sql = "UPDATE lessons SET title=?, uri=?, section=? WHERE uuid=?";

            db.query(sql, [title,uri,section,uuid], (err, result) => {
                if(err){
                    console.log(err);
                    res.sendStatus(500);
                }
                else{
                    res.json(result);
                }
            });
        } 
        catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    });

    //Delete Lesson
    app.post(baseUri + '/delete', async (req, res) => {
        try {
            let uuid = req.body.uuid;

            let sql = "DELETE FROM lessons WHERE uuid=?";

            db.query(sql, [uuid], (err, result) => {
                if(err){
                    console.log(err);
                    res.sendStatus(500);
                }
                else{
                    res.json(result);
                }
            });
        } 
        catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    });
}