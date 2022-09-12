const Order = require('../models/Order');


//create an order

const createOrder = async (req,res) =>{

    const neworder = new Order(req.body);
    
    try{
        const sorder = await neworder.save();
        res.status(200).json({
            success:true,
            sorder
        })
    }catch(err){
        res.status(500).json({msg:err});
    }
}

//updating a order

const updatedOrder = async (req,res) =>{

    try{
        const updated = await Order.findByIdAndUpdate(req.params.id,
        {
            $set:req.body,
        },
        {new:true}
        );
        res.status(200).json({
            success:true,
            updated
        })
    }catch(err){
        res.status(500).json({msg:err});
    }
}

const deleteOrder = async (req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json({msg:"order has been deleted"});
    }catch(err){
        res.status(500).json(err);
   }
}

//get orders for a particular user

const getUserOrders = async (req,res)=>{
    try{
        const userorders = await Order.find({userId:req.params.userId});
        res.status(200).json({
            success : true,
            userorders
        });
    }catch(err){
        res.status(500).json(err);
   }
}

// // get all orders of all users

const getallOrders = async (req,res)=>{

    try{
        const orders = await Order.find();
        
        res.status(200).json({
            success : true,
            orders
        });
    }catch(err){
        res.status(500).json({msg:err});
   }
}


module.exports = {createOrder,updatedOrder,deleteOrder,getUserOrders,getallOrders};