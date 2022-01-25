import express, { query } from "express"
import BaseController from "../utils/BaseController"
import { universeService } from '../services/UniverseService'

export class UniverseController extends BaseController {
    constructor() {
        super('api/universes');
        this.router
            .get("", this.getAll)
            .get("/:id", this.get)
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

    async create(req, res, next) {
        try {
            return res.send(await universeService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

}