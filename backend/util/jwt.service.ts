import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET!

export const jwtSign = (payload: any) => {
	return jwt.sign(payload, JWT_SECRET, { expiresIn: "14d" })
}

export const jwtVerify = (token: string) => {
	return jwt.verify(token, JWT_SECRET)
}
