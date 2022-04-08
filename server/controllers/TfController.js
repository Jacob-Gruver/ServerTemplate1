import { transformerService } from '../services/TfService'
import BaseController from '../utils/BaseController'

export class TransformerController extends BaseController {
    constructor() {
        super('api/transformers')
        this.router
            .get('', this.getRobots)
            .get('/:id', this.getOne)
            .post('', this.create)
    }

    async getRobots(req, res, next) {
        try {
            const roBots = await transformerService.getRobots(req.query)
            return res.send(roBots)
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        try {
            const roBot = await transformerService.getOne(req.params.id)
            return res.send(roBot)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            const newBot = await transformerService.create(req.body)
            res.send(newBot)
        } catch (error) {
            next(error)
        }
    }
}