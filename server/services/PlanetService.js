import { dbContext } from "../db/DbContext";

class PlanetService {

    async find(query = {}) {
        return await dbContext.Planets.find(query)
    }

    async create(body) {
        return await dbContext.Planets.create(body)
    }
}

export const planetService = new PlanetService()