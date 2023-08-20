import jwt from "jsonwebtoken";
import { mdl } from "../models/user.js";
import errorHandlingClass from "./error.js";
export const isLoggedIn = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new errorHandlingClass("Please Login First",404,false))
  } else { // always put this else part , otherwise , when you try to loggin after the getMyprofile (without loggin ) , server will crash
    console.log(process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const user = await mdl.findById(decoded._id);
    req.user = user;
    next();
  }
};
