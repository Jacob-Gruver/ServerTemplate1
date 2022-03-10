import { dbContext } from "../db/DbContext"

class NebulaService {

    async find(query = {}) {
        return await dbContext.Nebulas.find(query)
    }
    async findOne(id) {
        return await dbContext.Nebulas.find(id)
    }
    async create(body) {
        return await dbContext.Nebulas.create(body)
    }
}

export const nebulaService = new NebulaService