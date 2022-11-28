const User = require('../models/userModel');
const CryptoJS = require('crypto-js');


const updateuser = async (req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_PHRASE).toString()
    }
    try{
        const updateduser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        res.status(200).json({
            success:true,
            updateduser
        })
    }catch(err){
        res.status(500).json(err);
   }
}

const updatepass = async (req,res) =>{
    // console.log(req.body)
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_PHRASE).toString()
    }
    try{
        const updateduser = await User.findOneAndUpdate({'email':req.body.email},{
            $set:req.body
        },{new:true});
        // console.log(updateduser)
        res.status(200).json(updateduser)
    }catch(err){
        res.status(500).json(err);
   }
}

const deleteuser = async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({msg:"user hass been deleted"});
    }catch(err){
        res.status(500).json(err);
   }
}

const getuser = async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password,...others} = user._doc;
        res.status(200).json({
            success : true,
            others
        });
    }catch(err){
        res.status(500).json(err);
   }
}

const getalluser = async (req,res)=>{
    //if only want latest few users
    const query = req.query.new;

    try{
        const users = query ? await User.find().sort({_id:-1}).limit(2) : await User.find();
        res.status(200).json({
            success : true,
            users
        });
    }catch(err){
        res.status(500).json(err);
   }
}

//might not be needed

const getuserstats = async (req,res)=>{

    const date =new Date();
    const lyear = new Date(date.setFullYear(date.getFullYear-1));

    try{
        const data = await User.aggregate([
            {$match:{createAt: {$gte :lyear}}},
            {
                $project:{
                    month:{$month:"$createdAt"}
                },
            },
            {
                $group:{
                    _id:"$month",
                    total:{
                        $sum :1,
                    }
                }
            }
        ])
        res.status(200).json({
            success : true,
            data
        });
    }catch(err){
        res.status(500).json(err);
   }
}

const verifyUser = async (req,res) =>{
    try{
        console.log(req.params.id)
        const vuser = await User.find({"email" : req.params.id});

        console.log(vuser)
        if(!vuser.length){
            res.status(404).json({
                success:false
            })
        }else{
            res.status(200).json({
                success : true,
                vuser
            });
        }
    }catch(err){
        res.status(500).json(err);
   }

}

module.exports = {updateuser,deleteuser,getuser,getalluser,getuserstats,verifyUser,updatepass};
