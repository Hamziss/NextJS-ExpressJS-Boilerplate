import { NextFunction, Request, Response } from "express"
import userService from "../modules/user/user.service"
import { jwtVerify } from "../util/jwt.service"

interface Idecoded {
	id: string
}
export const isLoggedIn = async function (
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const { token } = req.cookies

		if (token) {
			const decoded = jwtVerify(token) as Idecoded

			const user = await userService.findUserbyId(decoded.id)
			if (user) {
				req.body.user = user
				return next()
			}
		} else {
			return res.status(401).json({ message: "Not Loged In" })
		}
	} catch (error) {
		res.status(500).json({ message: "error in auth middleware", error })
	}
}
