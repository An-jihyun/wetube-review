import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev")

const globalRouter = express.Router();
const userRouter = express.Router();
const videoRouter = express.Router();

const home = (req, res) => {
    return res.send("I still lov u");
}

app.use(logger);
app.get("/", home);

const handleListening = () => 
    console.log(`Server listening on port http://localhost:${PORT} 🍀`);

app.listen(PORT, handleListening)