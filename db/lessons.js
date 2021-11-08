const db = require("./connection");
const baseUri = "/api/lesson";
const UploadFile = require("../cloud/UploadFile");
const DeleteFile = require("../cloud/DeleteFile");

module.exports = initLesson = (app) => {
    
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

    //Get Lesson by Level
    app.post(baseUri + '/level', async (req, res) => {
        try {
            let level = req.body.level;

            let sql = "SELECT * FROM lessons WHERE level=?";

            db.query(sql, [level], (err, result) => {
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
            let description = req.body.description;
            let level = req.body.level;

            let file = req.files.file;

            let {url, bucketName} = await UploadFile(file, "lesson/"+level);

            if(url === 'error'){
                res.sendStatus(500);
                return;
            }

            let sql = "INSERT INTO lessons VALUES(?,?,?,?,?,?)";

            db.query(sql, [uuid,title,description,level,url,bucketName], (err, result) => {
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
            let level = req.body.level;

            let sql = "UPDATE lessons SET title=?, uri=?, level=? WHERE uuid=?";

            db.query(sql, [title,uri,level,uuid], (err, result) => {
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
            let bucketName = req.body.bucketName;

            let deleteRes = await DeleteFile(bucketName);

            if(deleteRes){
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
        } 
        catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    });
}