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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getAllUsers = exports.logOutUser = exports.registerUser = exports.loginUser = void 0;
const jwt_service_1 = require("../../util/jwt.service");
const user_service_1 = __importDefault(require("./user.service"));
// @route  POST api/user/login
// @desc   Login user and return JWT token
// @access Public
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_service_1.default.findUserbyEmail(req.body);
            if (!user || !(yield user.passwordCompare(req.body.password))) {
                return res.status(400).json({ message: "Password or email incorrect" });
            }
            const token = (0, jwt_service_1.jwtSign)({ id: user._id });
            res.cookie("token", token, { httpOnly: true, secure: true });
            const _a = user._doc, { password } = _a, userWithoutPassword = __rest(_a, ["password"]);
            res.json({ user: userWithoutPassword });
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.loginUser = loginUser;
// @route  POST /user/register
// @desc   Register user
// @access Public
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = yield user_service_1.default.createUser(req.body);
            if (!newUser)
                return res.status(400).json({
                    message: "User already exists",
                });
            const token = (0, jwt_service_1.jwtSign)({ id: newUser._id });
            res.cookie("token", token, { httpOnly: true, secure: true });
            res.status(201).json({
                message: "User created successfully",
                user: newUser,
            });
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.registerUser = registerUser;
// @route  POST /user/logout
// @desc   Logout user and clean token cookie
// @access Private
function logOutUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            res.clearCookie("token");
            res.json({ message: "User logged out successfully" });
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.logOutUser = logOutUser;
// @route  GET /user/all
// @desc   Get all users
// @access Private
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield user_service_1.default.getAllUsers();
            res.send(users);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.getAllUsers = getAllUsers;
// @route  DELETE /user/delete
// @desc   Delete user
// @access Private
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield user_service_1.default.deleteUser(req.body.user);
            res.json({ message: "User deleted successfully" });
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.deleteUser = deleteUser;
