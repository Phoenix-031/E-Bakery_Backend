const express = require('express');
const {addProduct, updateProduct,deleteProduct,getProduct, getallproducts} = require('../controllers/productcontroller');
const { verifyToken, verifytokenauthorisation,verifytokenandAdmin } = require('./verifytoken');


const router = express.Router();

router.post("/",verifytokenandAdmin,addProduct);
router.put("/:id",verifytokenandAdmin,updateProduct);
router.delete("/:id",verifytokenandAdmin,deleteProduct);
router.get("/:id",getProduct);
router.get("/",getallproducts);


module.exports = router;