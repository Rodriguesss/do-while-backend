"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageController = void 0;
const CreateMessageService_1 = require("../services/CreateMessageService");
class CreateMessageController {
    async handle(req, res) {
        const { message } = req.body;
        const { user_id } = res.locals;
        const service = new CreateMessageService_1.CreateMessageService();
        const result = await service.execute(message, user_id);
        return res.json(result);
    }
}
exports.CreateMessageController = CreateMessageController;
