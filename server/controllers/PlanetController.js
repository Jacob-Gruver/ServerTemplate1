import express, { query } from 'express'
import BaseController from '../utils/BaseController'
import { planetService } from '../services/PlanetService'

export class PlanetController extends BaseController {
    constructor() {
        super("api/planets");
        this.router
            .get("", this.getAll)
            .post("", this.create)
    }

    async getAll(req, res, next) {
        try {
            return res.send(await planetService.find(req.query))
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