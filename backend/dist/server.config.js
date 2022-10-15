"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOptions = exports.API_PREFIX = exports.corsOptions = void 0;
exports.corsOptions = {
    origin: (origin, callback) => {
        const accepted_origins = [origin, process.env.FRONTEND_URL];
        const origin_accepted = accepted_origins.includes(origin);
        callback(!origin_accepted && new Error("Request origin not accepted."), origin_accepted && origin);
    },
    credentials: true,
};
exports.API_PREFIX = "/api/v1";
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "API REST - NodeJS",
        description: "API REST Docs Boilerplate made with Node.js, Express, Swagger and Typescript, @Hamziss",
        version: "1.0.0",
    },
    servers: [{ url: process.env.BACKEND_URL + exports.API_PREFIX }],
};
exports.swaggerOptions = {
    swaggerDefinition,
    apis: ["./modules/**/*.docs.ts"],
};
