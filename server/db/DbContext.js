import ValueSchema from "../models/Value";
import UniverseSchema from '../models/Universe.js'
import GalaxySchema from "../models/Galaxy.js";
import StarSchema from "../models/Star.js";
import PlanetSchema from '../models/Planet.js'

import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);

  Universe = mongoose.model("Universe", UniverseSchema)

  Galaxies = mongoose.model("Galaxy", GalaxySchema);

  Stars = mongoose.model("Star", StarSchema);

  Planet = mongoose.model("Planet", PlanetSchema)


}

export const dbContext = new DbContext();
