//const router = express.Router();
const Classfees = require('../models/classfees');
const Student = require('../models/Studentforinstitute');
const Class = require('../models/Class');
const shortid = require('shortid')
const slugify = require('slugify')



exports.createclassfees = (req, res) => {

    // res.status(200).json({file: req.files , body:req.body});
    const {
        feesId, email, amount, year, month, classid, studentid
    } = req.body;
    //const feesId=
    //const ClassId= {Class.findOne({ClassId:classid}).select(ClassId)}
   // console.log(ClassId);
    const classfees = new Classfees({
        feesId,
        email,
        amount,
        year,
        month,
        classid,
        studentid,
        // createBy: req.user._id
    });

    classfees.save(((error, Classfees) => {
        if (error) return res.status(400).json({ error });
        if (Classfees) {
            res.status(201).json({ Classfees });
        }
    }));
    //hhh
};
exports.getclassfees = (req, res) => {
    Classfees.find({}).exec((error, fees) => {
        if (error) return res.status(400).json({ error });
        if (fees) {
            const feeslist = createfees(fees)
            return res.status(201).json({ feeslist });
        }
    });
}

// exports.getall = async (req, res) => {
//     await Classfees.find({}).then(
//         Class.findOne({classid:lassid}).select(ClassId).then(Student.findOne({studentid:studentid}).select(studentId))
//     )
//         .then(data => {
//             console.log(data);
//             console.log(data.classId);
//             res.status(200).send({ data: data });
//         }).catch(err => {
//             res.status(500).send({ error: err.massage })
//             console.log(err);
//         });


// }
exports.getall = async (req, res) => {
    await Classfees.find({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(err => {
            res.status(500).send({ error: err.massage })
            console.log(err);
        });


}

exports.updateclassfees = (req, res) => {

    const {
        feesId, email, amount, year, month, classid
    } = req.body;
    console.log(year);
    console.log(month);
    console.log(email);
    console.log(" id", req.params._id)

    Classfees.findByIdAndUpdate(req.params._id, { $set: { email: email, amount: amount, month: month, classid: classid } },
        { new: true })
        .catch((err) => {
            console.log(err);
        })
}
exports.deleteById = (req, res) => {
    const { feesId } = req.params._id;
    console.log(req.params._id)
    if (req.params._id) {
        Classfees.deleteOne({ _id: req.params._id }).exec((error, result) => {
        if (error) return res.status(400).json({ error });
        if (result) {
          res.status(202).json({ result });
        }
      });
    } else {
      res.status(400).json({ error: "Params required" });
    }
  };

exports.getfeesbyid=async(req,res)=>{
    if(req.params && req.params.feesId){
        console.log(req.params.feesId)
        //console.log(req.params);
        await  Classfees.findById(req.params.feesId)
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    }
    
  }
  exports.getfeesbyfeesid=async(req,res)=>{
    const feesId= req.body.feesId;
    //const feesId=
    
        console.log("dew"+feesId)
        //console.log(req.params);
        await  Classfees.findOne({feesId:feesId})
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    
    
  }