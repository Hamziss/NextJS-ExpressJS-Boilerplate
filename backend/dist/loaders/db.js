"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connect = () => {
    if (mongoose_1.default.connections[0].readyState) {
        console.log("Already connected.");
        return;
    }
    mongoose_1.default.connect(`${process.env.MONGODB_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err) => {
        if (err)
            throw err;
        console.log("Connected to MongoDB.");
    });
};
exports.default = { connect };
