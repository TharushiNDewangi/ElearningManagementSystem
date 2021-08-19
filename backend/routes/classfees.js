const router=require("express").Router();
const { requireSignin,sellermiddleware } = require('../middleware/index')
const {addcategory,getcategory}=require('../controller/classfees') 
const {createclassfees,getfeesbyid,getall,updateclassfees,deleteById ,getfeesbyfeesid } = require('../controller/classfees');
//const Product = require('../models/product');
const multer = require('multer');
//const upload=multer({dest:'uploads/'})

const shortid = require('shortid')
const path = require('path');
//const Product = require('../models/product');


 

router.post('/classfees/create',createclassfees);
router.get('/classfees/viewall',getall);
router.put('/classfees/edit/:_id',updateclassfees);
router.delete('/classfees/del/:_id',deleteById);
router.get('/classfees/:feesId',getfeesbyid);
router.post('/classfees/sech',getfeesbyfeesid);

 module.exports = router;  