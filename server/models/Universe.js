import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Universe = new Schema(
    {
        name: { type: String, required: true },
        mass: { type: Number, required: true, default: 2.2 },
        galaxypop: { type: Number, required: true }
    }

);

export default Universe;