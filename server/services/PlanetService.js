import { dbContext } from "../db/DbContext";

class PlanetService {

    async find(query = {}) {
        return await dbContext.Planets.find(query)
    }
}

export const planetService = new PlanetService()