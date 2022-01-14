import express, { query } from 'express'
import BaseController from '../utils/BaseController'
import { planetService } from '../services/PlanetService'

export class PlanetController extends BaseController {
    constructor() {
        super("api/planets");
        this.router
            .get("", this.getAll)
    }

    async getAll(req, res, next) {
        try {
            return res.send(await planetService.find(req.query))
        } catch (error) {
            next(error)
        }
    }
}