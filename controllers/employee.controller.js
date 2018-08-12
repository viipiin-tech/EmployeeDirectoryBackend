const employee = require('./models/employee.model');
const mongoose = require('mongoose');


// Create and Save a new employee
exports.create = (req, res) => {
    // Validate request

    if (!req.body) {
        return res.status(400).send({
            message: "employee content can not be empty"
        });
    }

    // Create a employee
    const employeeModel = new employee({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        gender: req.body.gender,
        dob: req.body.dob,
        email: req.body.email,
        department: req.body.department,
        age: req.body.age
    });

    // Save employee in the database
    employeeModel.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the employee."
            });
        });
};







// Update a employee identified by the employeeId in the request
exports.update = (req, res) => {
    // Validate Request
    
    if (!req.body) {
        return res.status(400).send({
            message: "employee content can not be empty"
        });
    }

    // Find employee and update it with the request body
    employee.findByIdAndUpdate(req.params.employeeId, {

    	name: req.body.name,
        gender: req.body.gender,
        dob: req.body.dob,
        email: req.body.email,
        department: req.body.department,
        age: req.body.age
        }, {
            upsert: true,
            new: true
        })
        .then(employee => {
            if (!employee) {

                return res.status(404).send({
                    message: "employee not found with id " + req.params.employeeId
                });
            }
            res.send(employee);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "employee not found with id " + req.params.employeeId
                });
            }
            return res.status(500).send({
                message: "Error updating employee with id " + req.params.employeeId
            });
        });
};

// Delete a employee with the specified employeeId in the request
exports.delete = (req, res) => {
  
    employee.findByIdAndRemove(req.params.employeeId)
        .then(employee => {
            if (!employee) {
                return res.status(404).send({
                    message: "employee not found with id " + req.params.employeeId
                });
            }
            res.send({
                message: "employee deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "employee not found with id " + req.params.employeeId
                });
            }
            return res.status(500).send({
                message: "Could not delete employee with id " + req.params.employeeId
            });
        });
};