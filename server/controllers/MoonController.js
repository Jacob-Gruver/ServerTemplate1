// import BaseController from "../utils/BaseController";
// import { moonService } from "../services/MoonService";

// export class MoonController extends BaseController {
//     constructor() {
//         super('api/moons')
//         this.router
//             .get("", this.getAll)
//             .get("/:id", this.get)
//             .post("", this.create)
//     }
//     async getAll(req, res, next) {
//         try {
//             return res.send(await moonService.find(req.query))
//         } catch (error) {
//             next(error)
//         }
//     }

//     async get(req, res, next) {
//         try {
//             return res.send(await moonService.findOne(req.params.id))
//         } catch (error) {
//             next(error)
//         }
//     }


//     async create(req, res, next) {
//         try {
//             return res.send(await moonService.create(req.body))
//         } catch (error) {
//             next(error)
//         }
//     }
// }