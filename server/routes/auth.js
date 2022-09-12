const express = require('express');
const Userfunc = require('../controllers/authcontroller');

const router = express.Router();


router.post('/register',Userfunc.registerUser);
router.post('/login',Userfunc.loginUser);



module.exports = router;