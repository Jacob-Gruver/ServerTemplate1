// import mongoose from "mongoose";
// const Schema = mongoose.Schema
// const ObjectId = mongoose.Types.ObjectId

// const Planet = new Schema(
//     {
//         name: { type: String, required: true, default: 'unknown' },
//         mass: { type: Number, required: true },
//         moons: { type: Number, required: true, default: 0 },
//         type: { type: String, required: true, enum: ['gas giant', 'neptunian', 'terrestrial'] },
//         habitable: { type: Boolean, required: true, default: true },
//         government: { type: String, required: true, enum: ['dictatorship', 'republic', 'empirical', 'mixed', 'primitive', 'n/a'], default: 'n/a' },
//         species: { type: String, required: true, default: 'n/a' },
//         starId: { type: ObjectId, ref: 'Star', required: true }
//     }
// )

// export default Planet