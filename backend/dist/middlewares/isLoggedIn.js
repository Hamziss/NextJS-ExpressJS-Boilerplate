"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoggedIn = void 0;
const user_service_1 = __importDefault(require("../modules/user/user.service"));
const jwt_service_1 = require("../util/jwt.service");
const isLoggedIn = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { token } = req.cookies;
            if (token) {
                const decoded = (0, jwt_service_1.jwtVerify)(token);
                const user = yield user_service_1.default.findUserbyId(decoded.id);
                if (user) {
                    req.body.user = user;
                    return next();
                }
            }
            else {
                return res.status(401).json({ message: "Not Loged In" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "error in auth middleware", error });
        }
    });
};
exports.isLoggedIn = isLoggedIn;
