module.exports = (app) => {
    const employee = require('../controllers/employee.controller.js');

    app.all('/*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

        next();
    });

    // Create a new employee
    app.post('/employee', employee.create);

    // Retrieve all employee
    app.get('/employee', employee.findAll);

    // Retrieve a single employee with employeeId
    app.get('/employee/:employeeId', employee.findOne);

    // Update a employee with employeeId
    app.put('/employee/:employeeId', employee.update);

    // Delete a employee with employeeId
    app.delete('/employee/:employeeId', employee.delete);
}