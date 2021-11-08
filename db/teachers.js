const db = require("./connection");
const baseUri = "/api/teacher";

module.exports = initTeacher = (app) => {

    //Get teachers
    app.get(baseUri + '/all', async (req, res) => {
        try {
                        
            let sql = "SELECT * FROM teachers";

            db.query(sql, (err, result) => {
                if(err){
                    console.log(err);
                    res.sendStatus(500);
                }
                else{
                    res.json(result);
                }
            });
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    });

    //Add Teachers
    app.post(baseUri + '/add', async (req, res) => {
        try {
            let uuid = req.body.uuid;
            let lname = req.body.lname;
            let fname = req.body.fname;
            let mname = req.body.mname;
            let level = req.body.level;
            let username = req.body.username;
            let password = req.body.password;

            let sql = "INSERT INTO teachers VALUES(?,?,?,?,?,?,?)";

            db.query(sql, [uuid,lname,fname,mname,level,username,password], (err, result) => {
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

    //Update Teacher
    app.post(baseUri + '/update', async (req, res) => {
        try {
            let uuid = req.body.uuid;
            let lname = req.body.lname;
            let fname = req.body.fname;
            let mname = req.body.mname;
            let level = req.body.level;
            let username = req.body.username;
            let password = req.body.password;

            let sql = "UPDATE students SET lname=?, fname=?. mname=?, level=?, username=?, password=? WHERE uuid=?";

            db.query(sql, [lname,fname,mname,level,username,password,uuid], (err, result) => {
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

    //Delete Student
    app.post(baseUri + '/delete', async (req, res) => {
        try {
            let uuid = req.body.uuid;

            let sql = "DELETE FROM students WHERE uuid=?";

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