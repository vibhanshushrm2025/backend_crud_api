import {register,login, getAll, getUserDetail, myProfile, logout} from "../controllers/user.js"
import express from "express";
import { isLoggedIn } from "../middlewares/auth.js";
const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.get("/all",getAll)
router.get("/logout",logout)
router.get("/userId/:id",isLoggedIn,getUserDetail)
router.get("/me",isLoggedIn,myProfile);// isLoggedIn function will check if the cookie exists or not ,
                                      // and if exists , it will pass the user to the next() function as a req.user = user 
                                      // this function can be implemented on any page with has to be visited after only after loggedIn


export default router;
