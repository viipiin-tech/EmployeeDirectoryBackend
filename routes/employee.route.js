module.exports = (app) => {
    const employee = require('../controllers/employee.controller.js');

    app.all('/*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

        next();
    });

    app.post('/add', employee.create);
    app.post('/employee', employee.findAll);

 // Update a employee with employeeId
 app.put('/update/:employeeId', employee.update);

 // Delete a employee with employeeId
 app.delete('/delete/:employeeId', employee.delete);
}

