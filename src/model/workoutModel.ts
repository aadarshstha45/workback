import { DataTypes } from "sequelize";
import { connection } from "../db/conn";

export const workoutSchema = connection.define(
  "workout",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
    },
    reps: {
      type: DataTypes.INTEGER,
    },
    load: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);
