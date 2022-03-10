import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const Nebula = new Schema(
    {
        name: { type: String, required: true },
        color: { type: String, required: true },
        starpop: { type: Number, default: 0, required: true },
        type: { type: String, enum: ['diffuse', 'reflection', 'dark', 'planetary'], default: 'diffuse', required: true },
        galaxyId: { type: ObjectId, ref: 'Galaxy', required: true }
    }
)

export default Nebula

