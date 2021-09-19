import mongoose from "mongoose";

interface TodoInterface {
  title: String;
  description: String;
}
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },

    description: {
      type: String,
      required: [true, "description is required"],
    },
  },
  { timestamps: true }
);

const todoModel = mongoose.model<TodoInterface>("Todo_SandBox", todoSchema);

export default todoModel;
