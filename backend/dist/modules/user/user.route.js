"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isLoggedIn_1 = require("../../middlewares/isLoggedIn");
const user_controller_1 = require("./user.controller");
const user_validator_1 = require("./user.validator");
const router = (0, express_1.Router)();
router
    .post("/register", user_validator_1.validateUserRegister, user_controller_1.registerUser)
    .post("/login", user_validator_1.validateUserLogin, user_controller_1.loginUser)
    .post("/logout", isLoggedIn_1.isLoggedIn, user_controller_1.logOutUser)
    .get("/all", isLoggedIn_1.isLoggedIn, user_controller_1.getAllUsers)
    .delete("/delete", isLoggedIn_1.isLoggedIn, user_controller_1.deleteUser);
exports.default = router;
