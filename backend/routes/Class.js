const router = require('express').Router();
const { requireSignin, sellermiddleware } = require('../middleware/index');
// const {addcategory,getcategory}=require('../controller/Studentforinstitute')
const {
    getall,
    createClass,
    getAllTeachers,
    deleteById,
    updateScheduleById,
} = require('../controller/Class');
//const Product = require('../models/product');
const multer = require('multer');
//const upload=multer({dest:'uploads/'})

const shortid = require('shortid');
const path = require('path');
//const Product = require('../models/product');

router.post('/classschedule/create', createClass);
router.get('/classschedule/viewall', getall);
router.get('/classschedule/teachers', getAllTeachers);
router.delete('/classschedule/del/:_id', deleteById);
router.put('/classschedule/updateScheduleById/:_id', updateScheduleById);
// router.get('/products/:productid',getproductsbyId);
// router.delete('/product/delete/:productid',deleteProduct);
// router.delete('/products/update/:productid',editproduct);
// router.post('/product/create',requireSignin,adminMiddleware,upload.array('productPicture'),createProduct);

module.exports = router;
