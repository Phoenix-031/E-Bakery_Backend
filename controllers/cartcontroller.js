const Cart = require('../models/Cart');

//create a cart

const createcart = async (req,res) =>{

    console.log(req.body)
    
    const findcart  =await Cart.findOne({"userId":req.body.userId})
    if(findcart){

        // console.log(findcart)
        // console.log(findcart.products)

        const exists = findcart.products.find(prod => prod.productId === req.body.products.productId)
        // console.log(exists)

        if(exists){
            console.log(exists)

            const added = await Cart.findOneAndUpdate({"userId":req.body.userId,'products.productId' :req.body.products.productId},{
                "$set": {
                    "products.$":{
                        ...req.body.products,
                        quantity:exists.quantity+ 1
                    }
                }
            },{new:true})
    
            res.status(200).json({
                success:true,
                added
            })

        }else{

            const added = await Cart.findOneAndUpdate({"userId":req.body.userId},{
                "$push": {
                    "products":req.body.products
                }
            },{new:true})
    
            res.status(200).json({
                success:true,
                added
            })

        }
    }
    else{
        const ncart = new Cart(req.body);
    
        try{
            const scart = await ncart.save();
            res.status(200).json({
                success:true,
                scart
            })
        }catch(err){
            res.status(500).json({msg:err});
        }

    }
}
const handledecrement = async (req,res) =>{

    console.log(req.params.id)
    
    const findcart  =await Cart.findOne({"userId":req.body.userId})
    console.log(findcart)
    if(findcart){

        // console.log(findcart)
        // console.log(findcart.products)

        const exists = findcart.products.find(prod => prod.productId === req.body.productId)
        // console.log(exists)

        if(exists){
            console.log(exists)

            const added = await Cart.findOneAndUpdate({"userId":req.body.userId,'products.productId' :req.body.productId},{
                "$set": {
                    "products.$":{
                        ...req.body,
                        quantity:exists.quantity- 1
                    }
                }
            },{new:true})
    
            res.status(200).json({
                success:true,
                added
            })

        }else{

            const added = await Cart.findOneAndUpdate({"userId":req.body.userId},{
                "$push": {
                    "products":req.body.products
                }
            },{new:true})
    
            res.status(200).json({
                success:true,
                added
            })

        }
    }
}

//updating a cart

const updateCart = async (req,res) =>{

    console.log(req.body.productId)
    console.log(req.params.id)
    try{
        const result = await Cart.updateOne({
            "userId":req.params.id
         },{
            $pull:{
                "products":{"productId":req.body.productId}
            }
         },{new:true})
        res.status(200).json({
            success:true,
            result
        })

        // const updatedcart = await Cart.findByIdAndUpdate(req.params.id,
        // {
        //    $pull:{
        //     "products":{productId:req.body.productId}
        //    }
        // },
        // {new:true}
        // );
        // res.status(200).json({
        //     success:true,
        //     updatedcart
        // })
    }catch(err){
        res.status(500).json({msg:err});
    }
}

const deleteCart = async (req,res)=>{
    try{
        await Cart.findOneAndDelete({"userId":req.params.id});
        res.status(200).json({msg:"user cart hass been deleted"});
    }catch(err){
        res.status(500).json(err);
   }
}

//get user cart

const getCart = async (req,res)=>{
    try{
        const cart = await Cart.findOne({userId:req.params.id});
        res.status(200).json({
            success : true,
            cart
        });
    }catch(err){
        res.status(500).json(err);
   }
}

// get all carts of all users

const getallCarts = async (req,res)=>{

    try{
        const carts = await Cart.find();
        
        res.status(200).json({
            success : true,
            carts
        });
    }catch(err){
        res.status(500).json({msg:err});
   }
}


module.exports = {createcart,updateCart,deleteCart,getCart,getallCarts,handledecrement};