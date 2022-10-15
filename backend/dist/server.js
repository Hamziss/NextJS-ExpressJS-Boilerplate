"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const db_1 = __importDefault(require("./loaders/db"));
const docs_setup_1 = __importDefault(require("./loaders/docs.setup"));
const routes_1 = __importDefault(require("./loaders/routes"));
const server_config_1 = require("./server.config");
const app = (0, express_1.default)();
// cors and helmet security
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)(server_config_1.corsOptions));
// json,cookie parser
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// load Api Routes and Docs
(0, routes_1.default)(app);
(0, docs_setup_1.default)(app);
// handle 404 error
app.use("*", (req, res, next) => {
    res.status(404).json({ message: "Resource not found." });
});
// db connection
db_1.default.connect();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
