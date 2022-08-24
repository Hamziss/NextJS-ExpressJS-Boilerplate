import { Router } from "express"
import { isLoggedIn } from "../../middlewares/isLoggedIn"
import {
	deleteUser,
	getAllUsers,
	loginUser,
	logOutUser,
	registerUser,
} from "./user.controller"
import { validateUserLogin, validateUserRegister } from "./user.validator"

const router = Router()

router
	.post("/register", validateUserRegister, registerUser)
	.post("/login", validateUserLogin, loginUser)
	.post("/logout", isLoggedIn, logOutUser)
	.get("/all", isLoggedIn, getAllUsers)
	.delete("/delete", isLoggedIn, deleteUser)

export default router
