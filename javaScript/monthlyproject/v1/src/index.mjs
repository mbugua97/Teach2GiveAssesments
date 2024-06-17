import express from "express"
import eventsRoutes from "./routes/index.mjs"
import cookieRoutes from "./cookies/index.mjs";
import { validateUser } from "./routes/middleware/index.mjs";
import cookieParser from "cookie-parser"

const app = express();
app.use(express.json());

//events crud
app.use(eventsRoutes)
app.use(cookieRoutes)
app.use(cookieParser("myval"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
});


