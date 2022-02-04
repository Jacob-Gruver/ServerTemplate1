import BaseController from "../utils/BaseController"
import { universeService } from '../services/UniverseService'
import { galaxyService } from "../services/GalaxyService"

export class UniverseController extends BaseController {
    constructor() {
        super('api/universes');
        this.router
            .get("", this.getAll)
            .get("/:id", this.get)
            .get("/:id/galaxies", this.getGalaxies)
            .post("", this.create)
    }

    async getAll(req, res, next) {
        try {
            return res.send(await universeService.find(req.query))
        } catch (error) {
            next(error)
        }
    }

    async get(req, res, next) {
        try {
            return res.send(await universeService.findOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async getGalaxies(req, res, next) {
        try {
            const galaxyData = await galaxyService.find({ Universe: req.params.id })
            return res.send(galaxyData)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            return res.send(await universeService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

}

// CRUD = Create, Read, Upload, & Delete
/*
    Basic use of CRUD is displayed above. 
    The class Universe Controller is also continued CRUD functionality in the Universe Service.
    The Controller defines the restful API within the constructor section of the class and defines which nature of the request the user is making and which CRUD opperation it should send to the service
    The types of CRUD opperations within Javascript are,
     get: which fetches data either by an entire selection or one by its ID aka. Read,
     post: which creates a new objecrt within a collection aka. Create,
     put: which edits a specific object within a desired collection aka. Upload,
     & delete: which removes an object from a selection. 
*/ 