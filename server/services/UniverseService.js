import { dbContext } from "../db/DbContext";

class UniverseService {

    async find(query = {}) {
        return await dbContext.Universes.find(query)
    }

    async findOne(id) {
        return await dbContext.Universes.findById(id)
    }

    async create(body) {
        return await dbContext.Universes.create(body)
    }
}

export const universeService = new UniverseService()