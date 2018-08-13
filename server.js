const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const employee = require('./controllers/employee.controller');

// create express app
const app = express();


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(cors())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url,  { useNewUrlParser: true })
    .then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...');
        process.exit();
    });


// listen for requests
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000");
});

require('./routes/employee.route.js')(app);