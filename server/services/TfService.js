import { dbContext } from '../db/DbContext'

class TfService {
    async getRobots(query = {}) {
        return await dbContext.Transformer.find(query)
    }

    async getOne(id) {
        return await dbContext.Transformer.findById(id)
    }

    async create(body) {
        return await dbContext.Transformer.create(body)
    }
}

export const tfService = new TfService()