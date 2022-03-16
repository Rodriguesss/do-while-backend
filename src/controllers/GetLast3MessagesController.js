"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLast3MessagesController = void 0;
const GetLast3MessagesService_1 = require("../services/GetLast3MessagesService");
class GetLast3MessagesController {
    async handle(req, res) {
        const service = new GetLast3MessagesService_1.GetLast3MessagesService();
        const result = await service.execute();
        return res.json(result);
    }
}
exports.GetLast3MessagesController = GetLast3MessagesController;
