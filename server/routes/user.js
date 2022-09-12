const express = require('express');
const { updateuser, deleteuser, getuser, getalluser,verifyUser,updatepass} = require('../controllers/usercontroller');
const { verifyToken, verifytokenauthorisation,verifytokenandAdmin } = require('./verifytoken');


const router = express.Router();


router.put("/:id",verifytokenauthorisation,updateuser);
router.put("/changepass/pass",updatepass);
router.delete("/:id",verifytokenauthorisation,deleteuser);
router.get("/find/:id",verifytokenandAdmin,getuser);
router.get('/',verifytokenandAdmin,getalluser);
router.get('/verify/:id',verifyUser)
// router.get('/stats',verifytokenandAdmin,getuserstats);


module.exports = router;