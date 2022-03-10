import { dbContext } from "../db/DbContext";

class MoonService {
    async find(query = {}) {
        return await dbContext.Moons.find(query)
    }

    async findOne(id) {
        return await dbContext.Moons.findById(id)
    }


    async create(body) {
        return await dbContext.Moons.create(body)
    }
}

export const moonService = new MoonService()