//const router = express.Router();
const Studentforinstitute = require('../models/Studentforinstitute');
const shortid = require('shortid')
const slugify = require('slugify')



exports.createStudentIninstitute = (req, res) => {

    // res.status(200).json({file: req.files , body:req.body});
    const {
        name, email, studentId, Studentclass,subject
    } = req.body;
    const studentforinstitute = new Studentforinstitute({
        name, 
        email, 
        studentId,
        Studentclass,  
        subject,
      
        // createBy: req.user._id
    });

    studentforinstitute.save(((error, Studentforinstitute) => {
        if (error) return res.status(400).json({ error });
        if (Studentforinstitute) {
            res.status(201).json({ Studentforinstitute });
        }
    }));
    //hhh
};


exports.getall=async(req,res)=>{
    await Studentforinstitute.find({})
    .then(data=>{
       res.status(200).send({data:data});
   }).catch(err=>{
       res.status(500).send({error:err.massage})
       console.log(err);
   });
  
           
   }

   exports.getstudentininstitute = (req, res) => {
    Studentforinstitute.find({}).exec((error, students) => {
        if (error) return res.status(400).json({ error });
        if (students) {
            const studentlist = createstudent(students)
            return res.status(201).json({ studentlist });
        }
    });
}
exports.updatestudentininstitute = (req, res) => {

    const {
        name, email, studentId, Studentclass, subject
    } = req.body;
  
    console.log(" id", req.params._id)

    Studentforinstitute.findByIdAndUpdate(req.params._id, { $set: { name: name, email: email, Studentclass: Studentclass, subject:subject } },
        { new: true })
        .catch((err) => {
            console.log(err);
        })
}
exports.deleteById = (req, res) => {
    const { studentId } = req.params._id;
    console.log(req.params._id)
    if (req.params._id) {
        Studentforinstitute.deleteOne({ _id: req.params._id }).exec((error, result) => {
        if (error) return res.status(400).json({ error });
        if (result) {
          res.status(202).json({ result });
        }
      });
    } else {
      res.status(400).json({ error: "Params required" });
    }
  };

exports.getstudentbyid=async(req,res)=>{
    if(req.params && req.params.studentId){
        console.log(req.params.studentId)
        //console.log(req.params);
        await  Studentforinstitute.findById(req.params.studentId)
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    }
    
  }
  exports.getstudentbystudentid=async(req,res)=>{
    const studentId= req.body.studentId;
    //const feesId=
    
        console.log("xxx"+studentId)
        //console.log(req.params);
        await  Studentforinstitute.findOne({studentId:studentId})
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    
    
  }

