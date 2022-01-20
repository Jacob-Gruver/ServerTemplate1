import mongoose from "mongoose"
const Schema = mongoose.Schema
// Import mongoose schema and assighn to a constant named Schema

const Moon = new Schema(
    {
        name: { type: String, required: true, default: 'unknown' },
        mass: { type: Number, required: true },


    }

)
// define constant object with a new instance of const Schema
// 

