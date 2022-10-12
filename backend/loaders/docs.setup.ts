import { Express } from "express"
import SwaggerDoc from "swagger-jsdoc"
import SwaggerUI from "swagger-ui-express"
import { API_PREFIX, swaggerOptions } from "../server.config"

const SetupDocs = (app: Express) => {
	const swaggerSpec = SwaggerDoc(swaggerOptions)
	app.use(`${API_PREFIX}/docs`, SwaggerUI.serve, SwaggerUI.setup(swaggerSpec))
}
export default SetupDocs
