import BaseController from "../utils/BaseController"
import { galaxyService } from "../services/GalaxyService"
import { starService } from "../services/StarService"
import { nebulaService } from "../services/NebulaService"

export class GalaxyController extends BaseController {
  constructor() {
    super("api/galaxies");
    this.router
      .get("", this.getAll)
      .get("/:id", this.get)
      .get("/:id/stars", this.getStars)
      .get("/:id/nebulas", this.getNebulas)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      return res.send(await galaxyService.find(req.query));
    } catch (error) {
      next(error);
    }
  }
  async get(req, res, next) {
    try {
      return res.send(await galaxyService.findOne(req.params.id));
    } catch (error) {
      next(error);
    }
  }
  async getStars(req, res, next) {
    try {
      const starData = await starService.find({ galaxyId: req.params.id })
      return res.send(starData)
    } catch (error) {
      next(error)
    }
  }
  async getNebulas(req, res, next) {
    try {
      const nebulaData = await nebulaService.find({ galaxyId: req.params.id })
      return res.send(nebulaData)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      return res.send(await galaxyService.create(req.body));
    } catch (error) {
      next(error);
    }
  }
}