const db = require("./connection");
const baseUri = "/api/section";

module.exports = initStudent = (app) => {
    
    //Get Sections
    app.get(baseUri + '/all', async (req, res) => {
        try {
            
            let sql = "SELECT * FROM sections";

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

    //Add Section
    app.post(baseUri + '/add', async (req, res) => {
        try {
            let uuid = req.body.uuid;
            let name = req.body.name;

            let sql = "INSERT INTO sections VALUES(?,?)";

            db.query(sql, [uuid,name], (err, result) => {
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

    //Update Section
    app.post(baseUri + '/update', async (req, res) => {
        try {
            let uuid = req.body.uuid;
            let name = req.body.name;

            let sql = "UPDATE sections SET name=? WHERE uuid=?";

            db.query(sql, [name,uuid], (err, result) => {
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

    //Delete Section
    app.post(baseUri + '/delete', async (req, res) => {
        try {
            let uuid = req.body.uuid;

            let sql = "DELETE FROM sections WHERE uuid=?";

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