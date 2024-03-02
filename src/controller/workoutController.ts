import { workoutSchema as Workout } from "../model/workoutModel";
import { Request, Response } from "express";
export const createWorkout = async (req: Request, res: Response) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({
      title,
      reps,
      load,
    });

    return res.json({ workout });
  } catch (err) {
    return res.json(err);
  }
};

export const getWorkouts = async (req: Request, res: Response) => {
  try {
    const workouts = await Workout.findAll();
    if (workouts.length === 0) {
      return res.json({
        error: "No Workouts Found",
      });
    }
    res.json({ workouts });
  } catch (err) {
    return res.json(err);
  }
};

export const getWorkoutById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const workout = await Workout.findByPk(id);
    if (!workout) {
      return res.json({
        error: "No Workout Found",
      });
    }
    return res.json({ workout });
  } catch (error) {
    return res.json(error);
  }
};

export const updateWorkout = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const workout = await Workout.findByPk(id);
    if (!workout) {
      return res.json({
        error: "No Workout Found",
      });
    }
    const updatedWorkout = await workout.update({ ...req.body });
    return res.json(updatedWorkout);
  } catch (err) {
    return res.json(err);
  }
};

export const deleteWorkout = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const workout = await Workout.findByPk(id);
    if (workout === null) {
      return res.json({
        error: "No Workout Found",
      });
    }
    const deletedWorkout = await workout.destroy();
    return res.json({ deletedWorkout: workout });
  } catch (err) {
    return res.json(err);
  }
};
