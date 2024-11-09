import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    pName:{
        type:"String",
        required:true
    },
    category:{
        type:"String",
        required:true
    },

    pDisc:{
        type:"String"
        
    },
    price:{
        type:Number,
        required:true
    },
    quty:{
        type:Number,
        required:true
    },
    activity:{
        type:"String",
        required:true
    },
   
})

export default mongoose.model('product', productSchema)