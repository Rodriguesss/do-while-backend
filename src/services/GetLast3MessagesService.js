"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLast3MessagesService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class GetLast3MessagesService {
    async execute() {
        const messages = await prisma_1.default.message.findMany({
            take: 3,
            orderBy: {
                created_at: "desc"
            },
            include: {
                user: true
            }
        });
        return messages;
    }
}
exports.GetLast3MessagesService = GetLast3MessagesService;
