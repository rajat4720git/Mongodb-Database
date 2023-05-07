let mongo = require('mongoose');

let DepartmentModel = new mongo.Schema({
    dept_id:{type:Number },
    dept:{type:String},
})

let Department =mongo.model('Department',DepartmentModel);
module.exports=Department;