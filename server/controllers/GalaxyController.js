import express, { query } from "express";
import BaseController from "../utils/BaseController";
import { galaxyService } from "../services/GalaxyService";

export class GalaxyController extends BaseController {
  constructor() {
    super("api/galaxies");
    this.router
      .get("", this.getAll)
      .get("/:id", this.get)
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
  async create(req, res, next) {
    try {
      return res.send(await galaxyService.create(req.body));
    } catch (error) {
      next(error);
    }
  }
}