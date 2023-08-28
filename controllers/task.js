import errorHandlingClass, { errorHandle } from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const newTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({
      title: title,
      description: description,
      userId: req.user._id,
    }); // This can be done in the following 2 lines  also
    // const task = new Task(Json)
    // await task.save();
    res.send(task);
  } catch (error) {
    next(error);
  }
};
export const myTasks = async (req, res) => {
  try {
    const ans = await Task.find({ userId: req.user._id });
    res.send(ans);
  } catch (error) {
    next(error);
  }
};
export const updateTask = async (req, res, next) => {
  try {
    // This is how to update the task
    const task = await Task.findById(req.params.id);
    if (!task)
      return next(new errorHandlingClass("Task Not Found", 201, false));
    task.isCompleted = !task.isCompleted;
    await task.save();
    next(new errorHandlingClass("Task Updated", 201, true)); // this line is same as the below commented code
    // res.json({
    //     success:true,
    //     message:"Task Updated"
    // });
  } catch (error) {
    next(error);
  }
};
export const deleteTask = async (req, res, next) => {
  try {
    // This is how to delete the task
    const task = await Task.findById(req.params.id);
    if (!task)
      return next(new errorHandlingClass("Task Not Found", 201, false)); // it is neccessary to put return here , otherwise it will go forward
    await task.deleteOne();
    next(new errorHandlingClass("Task Deleted", 201, true));
    // res.json({
    //     success:true,
    //     message:"Task Deleted"
    // });
  } catch (error) {
    next(error);
  }
};
