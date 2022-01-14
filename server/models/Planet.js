import mongoose from "mongoose";
const Schema = mongoose.Schema

const Planet = new Schema(
    {
        name: { type: String, required: true },
        mass: { type: Number, required: true },
        moons: { type: Number, required: true, default: 'n/a' },
        government: { type: String, enum: ['dictatorship', 'republic', 'empirical', 'mixed', 'primitive', 'n/a'], default: 'n/a' },
        species: { type: String, required: true, default: 'n/a' }
    }
)

export default Planet