const express = require('express');
const { updatedOrder, deleteOrder, getUserOrders, getallOrders, createOrder } = require('../controllers/ordercontroller');
const { route } = require('./user');
const { verifyToken, verifytokenauthorisation,verifytokenandAdmin } = require('./verifytoken');


const router = express.Router();


router.post("/",verifyToken,createOrder);
router.put("/:id",verifytokenandAdmin,updatedOrder);
router.delete("/:id",verifytokenandAdmin,deleteOrder);
router.get("/:id",verifytokenandAdmin,getUserOrders);
router.get("/",verifytokenandAdmin,getallOrders);


//just in case more stuff to add
//total monthly income  



module.exports = router;