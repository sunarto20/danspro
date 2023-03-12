import express from "express"
import db from "./config/Database.js";
import PositionController from "./controllers/Position.js";
import UserController from "./controllers/User.js";
import verifyToken from "./middleware/VerifyToken.js";
import User from "./models/User.js";
import cors from "cors";

const app = express()

try {
    await db.authenticate()
    console.log("database terkoneksi");
    await User.sync()
} catch (error) {
    console.log(error);
}
app.use(cors())
app.use(express.json())
app.post('/login', UserController.getUserByUsername)

app.get('/positions', verifyToken, PositionController.getPosition);
app.get('/positions/:id', PositionController.getPositionById);

app.listen(4000, () => {
    console.log('Server running port 4000')
})