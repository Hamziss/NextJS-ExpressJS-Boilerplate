import { Request, Response } from "express"
import Joi from "joi"

export const validateUserRegister = (
	req: Request,
	res: Response,
	next: Function
) => {
	const schema = Joi.object({
		email: Joi.string().max(200).email().required(),
		password: Joi.string().min(6).max(200).required(),
		firstName: Joi.string().required(),
		lastName: Joi.string().required(),
	})
	const { error } = schema.validate(req.body, { abortEarly: false })

	if (error) {
		let errors: string[] = error.details.map(detail => detail.message)
		return res.status(400).json({ message: errors })
	}
	next()
}

export const validateUserLogin = (
	req: Request,
	res: Response,
	next: Function
) => {
	const schema = Joi.object({
		email: Joi.string().max(200).email().required(),
		password: Joi.string().min(6).max(200).required(),
	})
	const { error } = schema.validate(req.body, { abortEarly: false })

	if (error) {
		let errors: string[] = error.details.map(detail => detail.message)
		return res.status(400).json({ message: errors })
	}
	next()
}
