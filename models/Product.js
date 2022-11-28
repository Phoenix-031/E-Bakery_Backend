const mongoose = require('mongoose');

const Productschema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true,
        maxLength:8
    },
    image :{
        type:String,
        required:true
    },

    category:{
        type:[String],
        required:true
    }

},{timestamps:true});

module.exports = mongoose.model('Product',Productschema);