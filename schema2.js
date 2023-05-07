let mongo = require('mongoose');

let TeacherModel = new mongo.Schema({
    teacher_id:{type:Number },
    teacher_name:{type:String},
    teacher_dept:{type:String} 
})

let Teacher =mongo.model('Teacher',TeacherModel);
module.exports=Teacher;