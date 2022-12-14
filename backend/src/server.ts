require("dotenv").config()
import cookieParser from "cookie-parser"
import cors from "cors"
import express from "express"
import helmet from "helmet"
import DB from "./loaders/db"
import SetupDocs from "./loaders/docs.setup"
import ApiRoutes from "./loaders/routes"
import { corsOptions } from "./server.config"
const app = express()

// cors and helmet security
app.use(helmet())
app.use(cors(corsOptions))

// json,cookie parser
app.use(express.json())
app.use(cookieParser())

// load Api Routes and Docs
ApiRoutes(app)
SetupDocs(app)

// test route
app.get("/ping", (req, res) => {
	res.send("pong")
})

// handle 404 error
app.use("*", (req, res, next) => {
	res.status(404).json({ message: "Resource not found." })
})

// db connection
DB.connect()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
})
