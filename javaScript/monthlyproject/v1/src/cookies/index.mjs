import {Router} from "express"
import { createcookie } from "../controllers/cookiecontroller.mjs"
import cookieParser from "cookie-parser"

const cookieRoutes  = Router()

cookieRoutes.get('/cookie/:id',createcookie)

export default cookieRoutes