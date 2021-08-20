//const router = express.Router();
const ClassSchedule = require('../models/Class');
const shortid = require('shortid')
const slugify = require('slugify')
const nodemailer = require("nodemailer");


exports.createClass = (req, res) => {

    // res.status(200).json({file: req.files , body:req.body});
    const {
        ClassId, hall, teachername, Studentbatch,day,starttime,endtime
    } = req.body;
    const classshedule = new ClassSchedule({
        ClassId, 
        hall,
        teachername,
        Studentbatch,  
        day,
        starttime,
        endtime
      
        // createBy: req.user._id
    });

    classshedule.save(((error, ClassSchedule) => {
        if (error){            console.log(email);
            const receiverEmail = email; // get the reciver email address from body of the  request
            const senderMail = "edexonlineconferencemanagement@gmail.com"; // set emailmaddress of sender
            const password = "asdqwe@123"; // set password of sender
    
            try {
                /*
               create reusable transporter object using the default SMTP transport
              */
                let transporter = nodemailer.createTransport({
                    service: "gmail", // use gmail as the email service
                    port: 25, // port number
                    secure: false, // true for 465, false for other ports
                    auth: {
                        // autnetication details
                        user: senderMail,
                        pass: password,
                    },
                    tls: {
                        rejectUnauthorized: false,
                    },
                });
        
                let HelperOptions = {
                    from: senderMail, // sender address
                    to: receiverEmail, // list of receivers
                    subject: "Your Fees received ", // Subject line
                    text: "", // plain text body
                    html: ` 
                          <h3>This is an automatically generated email, please do not reply </h3>
                          <li>Your class fees received THANKS YOU </li>
                          <li>status: Successuly received </li>
                          <li>amount: ${amount}</li>
                          <li>amount: ${month}</li>
                          <li>amount: ${year}</li>
                          
                          <h3>Best regards,</h3>
                          <p>Sipni Higher Education center</p>`,
                };
        
                // HTML version of the message
        
                transporter.sendMail(HelperOptions, (error, info) => {
                    // send mail with defined transport object
                    if (error) {
                        return console.log(error);
                    }
        
                    console.log("The message was sent!");
        
                    console.log(info);
        
                    res.json(info); // send the json response
                });
            } catch (e) {
                console.log(e);
            }}
        if (ClassSchedule) {
            res.status(201).json({ ClassSchedule });
        }
    }));
    //hhh
};
// exports.getclassfees=(req,res)=>
// {
//     Classfees.find({}).exec((error,fees)=>
//     {
//         if(error) return res.status(400).json({error});
//         if(fees){
//             const feeslist=createCatogories(fees)
//             return res.status(201).json({feeslist});
//         }
//     });
// }

exports.getall=async(req,res)=>{
    await ClassSchedule.find({})
    .then(data=>{
       res.status(200).send({data:data});
   }).catch(err=>{
       res.status(500).send({error:err.massage})
       console.log(err);
   });
  
           
   }

// exports.getproductsbyId = (req, res) => {

//     console.log('hey')
//     //res.status(200).json({file: req.files , body:req.body});
//     const { productid } = req.params;
//     console.log("pro id", productid)
//     if (productid) {
//         Product.findOne({ _id: productid })
//             .exec((error, product) => {
//                 console.log('error');
//                 if (error)
//                     return res.status(400).json({ error });
//                 console.log(error)
//                 if (product) {
//                     res.status(200).json({ product });
//                     console.log(product);
//                 }
//             });

//     } else {
//         return res.status(400).json({ error: 'params required' });
//     }
// };


// exports.deleteProduct = (req, res) => {
//     const { productid } = req.body.payload;
//     if (productid) {

//         Product.deleteOne({ _id: productid }).exec((error, product) => {
//             if (error)
//                 return res.status(400).json({ error });
//             console.log(error)
//             if (product) {
//                 res.status(200).json({ product });
//                 console.log(product);
//             }
//         });

//     } else {
//         return res.status(400).json({ error: 'params required' });
//     }
// };
// exports.editproduct = async (req, res) => {
//     const { productid } = req.params;
//     if (productid) {
//         const { _id, name, price, quatity, description, offer } = req.body;
//         const updatedproduct = {
//             name, price, quatity, description, offer
//         }
//         await Product.findByIdAndUpdate(productid, updatedproduct, { new: true });
//         res.json(updatedproduct);

//     }

// }