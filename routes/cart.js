const express = require('express');
const {createcart, updateCart, deleteCart, getCart, getallCarts,handledecrement} = require('../controllers/cartcontroller');
const { verifyToken, verifytokenauthorisation,verifytokenandAdmin } = require('./verifytoken');


const router = express.Router();


// router.post("/",verifyToken,createcart);
router.post("/",createcart);
router.post("/:id",handledecrement);
router.put("/:id",verifytokenauthorisation,updateCart);
router.delete("/:id",verifytokenauthorisation,deleteCart);
router.get("/:id",verifytokenauthorisation,getCart);
router.get("/",verifytokenandAdmin,getallCarts);




module.exports = router;