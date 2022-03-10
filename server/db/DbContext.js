import UniverseSchema from '../models/Universe.js'
import GalaxySchema from "../models/Galaxy.js"
import StarSchema from "../models/Star.js"
import NebulaSchema from "../models/Nebula.js"
import PlanetSchema from '../models/Planet.js'
import MoonSchema from '../models/Moon.js'

import mongoose from "mongoose";

class DbContext {

  Universes = mongoose.model("Universe", UniverseSchema)

  Galaxies = mongoose.model("Galaxy", GalaxySchema)

  Stars = mongoose.model("Star", StarSchema)

  Nebulas = mongoose.model("Nebula", NebulaSchema)

  Planets = mongoose.model("Planet", PlanetSchema)

  Moons = mongoose.model("Moon", MoonSchema)

}

export const dbContext = new DbContext()
