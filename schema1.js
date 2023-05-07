let mongo = require('mongoose');

let StudentModel = new mongo.Schema({
    std_id:{type:Number },
    std_name:{type:String},
    dob:{type:String} 
})

let Student =mongo.model('Student',StudentModel);
module.exports=Student;