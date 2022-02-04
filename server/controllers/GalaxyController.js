import express, { query } from "express";
import BaseController from "../utils/BaseController";
import { galaxyService } from "../services/GalaxyService";
// import { starService } from "../services/StarService"

export class GalaxyController extends BaseController {
  constructor() {
    super("api/galaxies");
    this.router
      .get("", this.getAll)
      .get("/:id", this.get)
      // .get("/:id/stars", this.getStars)
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
  // async getStars(req, res, next) {
  //   try {
  //     const starData = await starService.find({ Universe: req.params.id })
  //     return res.send(starData)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
  async create(req, res, next) {
    try {
      return res.send(await galaxyService.create(req.body));
    } catch (error) {
      next(error);
    }
  }
}