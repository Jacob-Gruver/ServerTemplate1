import { dbContext } from "../db/DbContext";

class UniverseService {

    async find(query = {}) {
        return await dbContext.Universe.find(query)
    }

    async create(body) {
        return await dbContext.Universe.create(body)
    }
}

export const universeService = new UniverseService()