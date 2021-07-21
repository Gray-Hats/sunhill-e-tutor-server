const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config');

const initSection = require('./db/sections');

app.use(cors());
app.use(express.json());

/*
* PORT
*/
app.listen(config.port, () => {
    console.log("Sunhill server is running...");
});

initSection(app);