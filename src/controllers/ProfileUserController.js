"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUserController = void 0;
const ProfileUserServices_1 = require("../services/ProfileUserServices");
class ProfileUserController {
    async handle(req, res) {
        const { user_id } = res.locals;
        const service = new ProfileUserServices_1.ProfileUserService();
        const result = await service.execute(user_id);
        return res.json(result);
    }
}
exports.ProfileUserController = ProfileUserController;
