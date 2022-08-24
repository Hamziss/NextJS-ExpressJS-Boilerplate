import { Express, Router } from "express"
import userRoute from "../modules/user/user.route"
import { API_PREFIX } from "../server.config"

interface Route {
	path: string
	route: Router
}

const routes: Route[] = [
	{
		path: "/user",
		route: userRoute,
	},
]

const ApiRoutes = (app: Express) => {
	routes.forEach((route: Route) => {
		app.use(API_PREFIX + route.path, route.route)
	})
}
export default ApiRoutes
