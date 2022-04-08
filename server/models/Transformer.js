import mongoose from "mongoose"
const Schema = mongoose.Schema

const Transformer = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        form: { type: String, required: true },
        specs: {
            strength: { type: Number, required: true, default: 0 },
            intelligence: { type: Number, required: true, default: 0 },
            speed: { type: Number, required: true, default: 0 },
            endurance: { type: Number, required: true, default: 0 },
            rank: { type: Number, required: true, default: 0 },
            courage: { type: Number, required: true, default: 0 },
            firepower: { type: Number, required: true, default: 0 },
            skill: { type: Number, required: true, default: 0 }
        },
        function: { type: String, required: true, default: 'N/A' },
        affiliation: { type: Boolean, required: true, default: false },
        // imgURL: { type: String, required: true, default: 'https://clipartart.com/images/free-clipart-black-and-white-electronic-cog.jpg' }
    }
)
