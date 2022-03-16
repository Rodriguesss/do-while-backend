"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).json({
            errorCode: "token.invalid",
        });
    }
    const [, token] = authToken.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        res.locals.user_id = sub;
        return next();
    }
    catch (err) {
        return res.status(401).json({ errorCode: "token.expired" });
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
