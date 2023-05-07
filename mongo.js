let express = require('express');
let mongoose =require('mongoose');
let app = express();
let Studentschema =require('./schema1');
let Teacherschema =require('./schema2');
let Departmentschema =require('./schema3');

app.use(express.json());

app.listen(3030,()=>{ console.log("Server running!");})
app.get('/',(request, response) =>{
    response.write("Express server created");
    response.end();
})
mongoose.connect('mongodb://127.0.0.1:27017/University',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( console.log("Connected to MongoDB"))
.catch((error)=> {console.log(error);})

app.get('/viewstudent',async (request, response)=>{
    try{   //fach data from the database
     let Student = await Studentschema.find({});
     response.send(Student);
    }
    catch(error){
  response.send(error);
    }
     })

     app.post('/addstd',(request, response)=>{
        try{     //adding document into mongodb collection
            let new_student = new Studentschema(request.body);
            new_student.save();
            response.status(200).json(new_student);
        }
        catch(error){
        response.status(400).send(error);
        }
        })
 app.get('/viewteacher',async (request, response)=>{
            try{   //fach data from the database
             let Teacher = await Teacherschema.find({});
             response.send(Teacher);
            }
            catch(error){
          response.send(error);
            }
             })
app.post('/addteacher',(request, response)=>{
                try{     //adding document into mongodb collection
                    let new_Teacher = new Teacherschema(request.body);
                    new_Teacher.save();
                    response.status(200).json(new_Teacher);
                }
                catch(error){
                response.status(400).send(error);
                }
                })

app.get('/viewDepartment',async (request, response)=>{
                    try{   //fach data from the database
                     let Department = await Departmentschema.find({});
                     response.send(Department);
                    }
                    catch(error){
                  response.send(error);
                    }
                     })            
 app.post('/addDepartment',(request, response)=>{
                        try{     //adding document into mongodb collection
                            let new_Department = new Departmentschema(request.body);
                            new_Department.save();
                            response.status(200).json(new_Department);
                        }
                        catch(error){
                        response.status(400).send(error);
                        }
                        })   