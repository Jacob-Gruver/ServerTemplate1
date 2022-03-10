import BaseController from '../utils/BaseController'
import { planetService } from '../services/PlanetService'
import { moonService } from '../services/MoonService';

export class PlanetController extends BaseController {
    constructor() {
        super("api/planets");
        this.router
            .get("", this.getAll)
            .get("/:id", this.get)
            .get("/:id/moons", this.getMoons)
            .post("", this.create)
    }

    async getAll(req, res, next) {
        try {
            return res.send(await planetService.find(req.query))
        } catch (error) {
            next(error)
        }
    }

    async get(req, res, next) {
        try {
            return res.send(await planetService.findOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async getMoons(req, res, next) {
        try {
            let moonData = await moonService.find({ planetId: req.params.id })
            return res.send(moonData)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            return res.send(await planetService.create(req.body))
        } catch (error) {
            next(error)
        }
    }
}