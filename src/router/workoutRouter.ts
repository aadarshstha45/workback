import express from "express";

import {
  createWorkout,
  getWorkoutById,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
} from "../controller/workoutController";
export const workoutRouter = express();

workoutRouter.get("/", getWorkouts);
workoutRouter.get("/:id", getWorkoutById);
workoutRouter.post("/", createWorkout);
workoutRouter.patch("/:id", updateWorkout);
workoutRouter.delete("/:id", deleteWorkout);
