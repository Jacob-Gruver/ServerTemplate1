import mongoose from "mongoose";
const Schema = mongoose.Schema;
// const ObjectId = mongoose.Schema.Types.ObjectId;

const Star = new Schema(
    {
        name: { type: String, required: true },
        mass: { type: Number, required: true },
        planetpop: { type: Number, required: true }
        // galaxyId: { type: ObjectId, ref: 'Galaxy', required: true },
    }
);



export default Star;