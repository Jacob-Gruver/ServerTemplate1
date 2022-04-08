import MoonSchema from '../models/Moon.js'
import TfSchema from '../models/Transformer'

import mongoose from "mongoose";

class DbContext {

  Moons = mongoose.model("Moon", MoonSchema)

  Transformer = mongoose.model("Transformer", TfSchema)

}

export const dbContext = new DbContext()
