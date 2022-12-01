import express from 'express'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
import mongoose from "mongoose";
const CONNECTION_STRING = 'mongodb+srv://goswamyrishi:3PgTZrEYo8UZ7MXJ@cluster0.mbih633.mongodb.net/tuiter'
    || 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())
app.use(express.json());
HelloController(app)
UserController(app)
TuitsController(app);
app.listen(process.env.PORT || 4000)

