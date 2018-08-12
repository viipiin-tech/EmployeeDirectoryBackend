const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    dob: String,
    department: String,
    gender: String,
    age: String
});

module.exports = mongoose.model('Employee', EmployeeSchema);