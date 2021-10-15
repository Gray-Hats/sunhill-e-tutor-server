const db = require("./connection");
const baseUri = "/api/student";

module.exports = initStudent = (app) => {

    //Get students
    app.get(baseUri + '/all', async (req, res) => {
        try {
                        
            let sql = "SELECT * FROM students";

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

     //Add Student
     app.post(baseUri + '/add', async (req, res) => {
        try {
            let uuid = req.body.uuid;
            let student_no = req.body.student_no;
            let lname = req.body.lname;
            let fname = req.body.fname;
            let mname = req.body.mname;
            let level = req.body.level;

            let sql = "INSERT INTO students VALUES(?,?,?,?,?,?)";

            db.query(sql, [uuid,student_no,lname,fname,mname,level], (err, result) => {
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

    //Update Student
    app.post(baseUri + '/update', async (req, res) => {
        try {
            let uuid = req.body.uuid;
            let student_no = req.body.student_no;
            let lname = req.body.lname;
            let fname = req.body.fname;
            let mname = req.body.mname;
            let level = req.body.level;

            let sql = "UPDATE students SET student_no=?, lname=?, fname=?. mname=?, level=? WHERE uuid=?";

            db.query(sql, [student_no,lname,fname,mname,level,uuid], (err, result) => {
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