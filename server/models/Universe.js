import mongoose from "mongoose";
// import { generateCodeName } from "../utils/GenerateCodeName"
const Schema = mongoose.Schema;

const Universe = new Schema(
    {
        name: { type: String, required: true },
        galacticWeb: { type: String, required: true, enum: ['spiral', 'tree', 'web'], default: 'web' },
        galaxypop: { type: Number, required: true }
    }

);

export default Universe;