import express from "express";
import { deleteTask, myTasks, newTask, updateTask } from "../controllers/task.js";
import { isLoggedIn } from "../middlewares/auth.js";
const router = express.Router();


router.post("/new",isLoggedIn,newTask);
router.get("/myTasks",isLoggedIn,myTasks)
router.route("/:id").put(isLoggedIn,updateTask).delete(isLoggedIn,deleteTask);


export default router;