import mongoose from "mongoose";

const carlist = new mongoose.Schema({
    name:String,
    price:String,
    type:String,
    model:String,
    img:String
});

export const carapi = mongoose.models.cars || mongoose.model('cars', carlist);