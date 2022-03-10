import BaseController from "../utils/BaseController"
import { nebulaService } from "../services/NebulaService"

export class NebulaController extends BaseController {
    constructor() {
        super("api/nebulas")
        this.router
            .get("", this.getAll)
            .get("/:id", this.getOne)
            .post("", this.create)
    }
    async getAll(req, res, next) {
        try {
            return res.send(await nebulaService.find(req.query))
        } catch (error) {
            next(error)
        }
    }
    async getOne(req, res, next) {
        try {
            return res.send(await nebulaService.findOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            return res.send(await nebulaService.create(req.body))
        } catch (error) {
            next(error)
        }
    }
}