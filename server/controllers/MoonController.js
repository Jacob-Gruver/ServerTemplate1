import express, { query } from "express";
import BaseController from "../utils/BaseController";
import { moonService } from "../services/MoonService";

export class MoonController extends BaseController {
    constructor() {
        super('api/moons')
        this.router
    }
    async getAll(req, res, next) {
        try {
            return res.send(await moonService.find(req.query))
        } catch (error) {
            next(error)
        }
    }
}