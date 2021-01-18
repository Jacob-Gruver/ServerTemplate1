import { dbContext } from "../db/DbContext";

class GalaxyService {
  
  async find(query={}) {
      return await dbContext.Galaxies.find(query);
  }
  async findOne(id) {
    return await dbContext.Galaxies.findById(id);
  }
  async create(body) {
    return await dbContext.Galaxies.create(body);
  }
//   async findById(id) {}
//   async findById(id) {}


}

export const galaxyService = new GalaxyService();