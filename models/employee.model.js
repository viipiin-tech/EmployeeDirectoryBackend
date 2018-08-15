const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
	_id : String,
	name : String,
	email : String,
	dob : String,
	department : String,
	gender : String,
	age : String
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Employee', EmployeeSchema);