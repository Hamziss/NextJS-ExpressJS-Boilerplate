"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = __importDefault(require("../modules/user/user.route"));
const server_config_1 = require("../server.config");
const routes = [
    {
        path: "/user",
        route: user_route_1.default,
    },
];
const ApiRoutes = (app) => {
    routes.forEach((route) => {
        app.use(server_config_1.API_PREFIX + route.path, route.route);
    });
};
exports.default = ApiRoutes;
