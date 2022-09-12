const Product = require('../models/Product');

//adding a new product

const addProduct = async (req,res) =>{

    const nprod = new Product(req.body);
    
    try{
        const sprod = await nprod.save();
        res.status(200).json({
            success:true,
            sprod
        })
    }catch(err){
        res.status(500).json({msg:err});
    }
}

//updating a product

const updateProduct = async (req,res) =>{

    try{
        const updatedprod = await Product.findByIdAndUpdate(req.params.id,
        {
            $set:req.body,
        },
        {new:true}
        );
        res.status(200).json({
            success:true,
            sprod
        })
    }catch(err){
        res.status(500).json({msg:err});
    }
}

//deleting a product 

const deleteProduct = async (req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({msg:"Product has been deleted"});
    }catch(err){
        res.status(500).json(err);
   }
}

//getting a single product 

const getProduct = async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json({
            success : true,
            product
        });
    }catch(err){
        res.status(500).json(err);
   }
}

//getting all products uses while filtering as well

const getallproducts = async (req,res)=>{
    const qNew = req.query.new;
    const qcategory = req.query.category;


    try{
        let product;
        if(qNew){
            product = await Product.find().sort({createdAt:-1}).limit(2)

        }else if(qcategory){
            product = await Product.find({
                category:{
                    $in:[qcategory],
                }})
        }else{
            product = await Product.find();
        }
        
        res.status(200).json({
            success : true,
            product
        });
    }catch(err){
        res.status(500).json(err);
   }
}


module.exports = {addProduct,updateProduct,deleteProduct,getProduct,getallproducts};