import mongoose from "mongoose"
const Schema = mongoose.Schema
// Import mongoose schema and assighn to a constant named Schema

const Moon = new Schema(
    {
        name: { type: String, required: true, default: 'unknown' },
        mass: { type: Number, required: true },
        craters: { type: Number, required: true, default: 0 }
    }

)
// define constant object with a new instance of const Schema


export default Moon
// export by default instance of mew Schema Moon
