import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Star = new Schema (
    {
        name: { type: String, required: true},
        mass: { type: Number, required: true},
        planetpop: { type: Number, required: true},
    }
);

export default Star;