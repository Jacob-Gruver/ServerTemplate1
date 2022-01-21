import mongoose from "mongoose";
import { generateCodeName } from "../utils/GenerateCodeName";
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId

const Galaxy = new Schema(
    {
        name: { type: String, required: true, default: generateCodeName },
        type: { type: String, required: true, enum: ['spiral', 'barred spiral', 'elliptical', 'peculiar', 'irregular', 'lenticular'] },
        starpop: { type: Number, required: true },
        universeId: { type: objectId, ref: 'Universe', required: true }
    }

);

export default Galaxy;