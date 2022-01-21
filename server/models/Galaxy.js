import mongoose from "mongoose";
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId

const Galaxy = new Schema(
    {
        name: { type: String, required: true },
        mass: { type: Number, required: true },
        starpop: { type: Number, required: true },
        universeId: { type: objectId, ref: 'Universe', required: true }
    }

);

export default Galaxy;