const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order')
const cartRoutes = require('./routes/cart')
const Razorpay=require("razorpay");


dotenv.config({path:'./config/config.env'});

connectDB();

const app = express();

let instance = new Razorpay({
    key_id: '', // your `KEY_ID`
    key_secret: '' // your `KEY_SECRET`
  })


//middewares
app.use(cors());
app.use(express.json());


//Routing
app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/products',productRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/carts',cartRoutes);


//razopay payement 

app.get('/api/getorder/:id',(req,res) =>{

    let options = {
        amount:req.params.id,
        currency:"INR",
        receipt:"order_rcpid_11"
    };
    instance.orders.create(options,function(err,order){
        console.log(order) 
        res.status(200).json(order)
    }) 
})


// app.post("/api/web/")


PORT = process.env.PORT || 3000;

app.get('/',(req,res) =>{res.status(200).json("server running")});

app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)});



// unhandled promise rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
    console.log("shutting down due to unhandled promise rejection");

    server.close(()=>{
        process.exit(1);
    })
})