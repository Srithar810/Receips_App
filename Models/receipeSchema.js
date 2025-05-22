import mongoose from "mongoose";

const receipeSchema = mongoose.Schema({
    name :{
        type :String,
        required :true,

    },
    description :{
        type :String,
        required :true,
    },
    quantity :{
        type :Number,
        required :true,
    },
    price :{
        type :Number,
        required :true,
    },
})


const receipes = mongoose.model("receipes", receipeSchema)


export default receipes;

