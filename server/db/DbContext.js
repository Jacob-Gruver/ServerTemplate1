import MoonSchema from '../models/Moon.js'

import mongoose from "mongoose";

class DbContext {

  Moons = mongoose.model("Moon", MoonSchema)

}

export const dbContext = new DbContext()
