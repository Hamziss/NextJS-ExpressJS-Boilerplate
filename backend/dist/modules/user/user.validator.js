"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserLogin = exports.validateUserRegister = void 0;
const joi_1 = __importDefault(require("joi"));
const validateUserRegister = (req, res, next) => {
    const schema = joi_1.default.object({
        email: joi_1.default.string().max(200).email().required(),
        password: joi_1.default.string().min(6).max(200).required(),
        firstName: joi_1.default.string().required(),
        lastName: joi_1.default.string().required(),
    });
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        let errors = error.details.map(detail => detail.message);
        return res.status(400).json({ message: errors });
    }
    next();
};
exports.validateUserRegister = validateUserRegister;
const validateUserLogin = (req, res, next) => {
    const schema = joi_1.default.object({
        email: joi_1.default.string().max(200).email().required(),
        password: joi_1.default.string().min(6).max(200).required(),
    });
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        let errors = error.details.map(detail => detail.message);
        return res.status(400).json({ message: errors });
    }
    next();
};
exports.validateUserLogin = validateUserLogin;
