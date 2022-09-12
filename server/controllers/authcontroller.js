const Auth = require('../models/userModel');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');


const userfunc = {

    //REGISTER

    registerUser: async(req,res) =>{
        try{
            const newuser = new Auth({
                username:req.body.username,
                email:req.body.email,
                password:CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_PHRASE).toString(),
            });
    
            const sv = await newuser.save();
            res.status(200).json({
                success:true,
                sv
            })            

        }catch(err){
            res.status(404).json({
                success:false,
                msg:err
            })
        }
    },

    //LOGIN
    
    loginUser: async (req,res) =>{
        try{

            const user = await Auth.findOne({username:req.body.username});
            if(!user){
                res.status(401).json("NO such user/Wrong Credentials");
            }

            const  hashpass = CryptoJS.AES.decrypt(user.password,process.env.SECRET_PHRASE);
            const pass = hashpass.toString(CryptoJS.enc.Utf8);

           if (pass !== req.body.password){
            res.status(401).json("Wrong credentials");
           }

           //json web token

           const accessToken = jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin
           },
           process.env.JWT_SEC,
           {expiresIn:"3d"}
           );

           const {password,...others} = user._doc;

           res.json({
                success:true,
                others,
                accessToken
            });
            
        }catch(err){
            res.status(500).json({msg:err});
            console.log(err);
        }
    }
};

module.exports = userfunc;