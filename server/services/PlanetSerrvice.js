import { dbContext } from "../db/DbContext";

class PlanetService {

    async find(query = {}) {
        return await dbContext.Planet
    }
}