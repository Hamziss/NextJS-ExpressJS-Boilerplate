import { OAS3Definition } from "swagger-jsdoc"

export const corsOptions = {
	origin: (origin: string | undefined, callback: Function) => {
		const accepted_origins = [origin, process.env.FRONTEND_URL]
		const origin_accepted = accepted_origins.includes(origin)
		callback(
			!origin_accepted && new Error("Request origin not accepted."),
			origin_accepted && origin
		)
	},
	credentials: true,
}

export const API_PREFIX = "/api/v1"

const swaggerDefinition: OAS3Definition = {
	openapi: "3.0.0",
	info: {
		title: "API REST - NodeJS",
		description:
			"API REST Docs Boilerplate made with Node.js, Express, Swagger and Typescript, @Hamziss",
		version: "1.0.0",
	},
	servers: [{ url: process.env.BACKEND_URL! + API_PREFIX }],
}

export const swaggerOptions = {
	swaggerDefinition,
	apis: ["./modules/**/*.docs.ts"],
}
