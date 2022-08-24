import { Request, Response } from "express"
import { jwtSign } from "../../util/jwt.service"
import userService from "./user.service"

// @route  POST api/user/login
// @desc   Login user and return JWT token
// @access Public
export async function loginUser(req: Request, res: Response) {
	try {
		const user = await userService.findUserbyEmail(req.body)
		if (!user || !(await user.passwordCompare(req.body.password))) {
			return res.status(400).json({ message: "Password or email incorrect" })
		}

		const token = jwtSign({ id: user._id })
		res.cookie("token", token, { httpOnly: true, secure: true })
		const { password, ...userWithoutPassword } = user._doc
		res.json({ user: userWithoutPassword })
	} catch (error) {
		res.status(500).send(error)
	}
}

// @route  POST /user/register
// @desc   Register user
// @access Public
export async function registerUser(req: Request, res: Response) {
	try {
		const newUser = await userService.createUser(req.body)
		if (!newUser)
			return res.status(400).json({
				message: "User already exists",
			})

		const token = jwtSign({ id: newUser._id })
		res.cookie("token", token, { httpOnly: true, secure: true })
		res.status(201).json({
			message: "User created successfully",
			user: newUser,
		})
	} catch (error) {
		res.status(500).send(error)
	}
}

// @route  POST /user/logout
// @desc   Logout user and clean token cookie
// @access Private
export async function logOutUser(req: Request, res: Response) {
	try {
		res.clearCookie("token")
		res.json({ message: "User logged out successfully" })
	} catch (error) {
		res.status(500).send(error)
	}
}

// @route  GET /user/all
// @desc   Get all users
// @access Private
export async function getAllUsers(req: Request, res: Response) {
	try {
		const users = await userService.getAllUsers()
		res.send(users)
	} catch (error) {
		res.status(500).send(error)
	}
}

// @route  DELETE /user/delete
// @desc   Delete user
// @access Private
export async function deleteUser(req: Request, res: Response) {
	try {
		await userService.deleteUser(req.body.user)
		res.json({ message: "User deleted successfully" })
	} catch (error) {
		res.status(500).send(error)
	}
}
