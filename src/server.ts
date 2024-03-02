import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { workoutRouter } from "./router/workoutRouter";
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());

app.use("/workout/", workoutRouter);

app.listen(port, () => {
  console.log("listening");
});
