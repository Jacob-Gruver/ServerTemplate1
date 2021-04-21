import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Galaxy = new Schema(
    {
        name: { type: String, required: true },
        mass: { type: Number, required: true },
        starpop: { type: Number, required: true }
    }

);

export default Galaxy;