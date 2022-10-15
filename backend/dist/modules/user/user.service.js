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
const user_schema_1 = __importDefault(require("./user.schema"));
const userService = {
    findUserbyEmail(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = user;
            return yield user_schema_1.default.findOne({ email });
        });
    },
    findUserbyId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_schema_1.default.findById(id);
        });
    },
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkUser = yield this.findUserbyEmail(user);
            if (checkUser) {
                return false;
            }
            const newUser = new user_schema_1.default(user);
            yield newUser.save();
            const _a = newUser._doc, { password } = _a, others = __rest(_a, ["password"]);
            return others;
        });
    },
    updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = user;
            return yield user_schema_1.default.findOneAndUpdate({ email }, user);
        });
    },
    deleteUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = user;
            return yield user_schema_1.default.findByIdAndDelete(_id);
        });
    },
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_schema_1.default.find().select("-password");
        });
    },
};
exports.default = userService;
