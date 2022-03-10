import BaseController from "../utils/BaseController"
import { starService } from "../services/starService"
import { planetService } from "../services/PlanetService"

export class StarController extends BaseController {
    constructor() {
        super("api/stars")
        this.router
            .get("", this.getAll)
            .get("/:id", this.get)
            .get("/:id/planets", this.getPlanets)
            .post("", this.create)
        //   .delete("/:id", this.deleteStar);
    }
    async getAll(req, res, next) {
        try {
            return res.send(await starService.find(req.query))
        } catch (error) {
            next(error)
        }
    }
    async get(req, res, next) {
        try {
            return res.send(await starService.findOne(req.params.id))
        } catch (error) {
            next(error);
        }
    }
    async getPlanets(req, res, next) {
        try {
            let planetData = await planetService.find({ starId: req.params.id })
            return res.send(planetData)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            return res.send(await starService.create(req.body))
        } catch (error) {
            next(error)
        }
    }
    //   async deleteStar(req, res, next) {
    //     try {
    //       return res.send( await starService.deleteStar(req.body.id));
    //     } catch (error) {
    //       next(error);
    //     }
    //   }
}