import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import jwt from "jsonwebtoken";

//Admin Authentication
export const isAdminAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.adminToken;
  if (!token) {
    return next(new ErrorHandler("Admin Not Authenticated!", 400));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);
  if (req.user.role !== "Admin") {
    return next(
      new ErrorHandler(`${req.user.role} not authorized for this resources!`)
    );
  }
  next();
});

//Student Authentication
export const isStudentAuthenticated = catchAsyncErrors(
  async (req, res, next) => {
    const token = req.cookies.studentToken;
    if (!token) {
      return next(new ErrorHandler("Student Not Authenticated!", 400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if (req.user.role !== "Student") {
      return next(
        new ErrorHandler(`${req.user.role} not authorized for this resources!`)
      );
    }
    next();
  }
);

//Staff Authentication
export const isStaffAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.staffToken;
  if (!token) {
    return next(new ErrorHandler("Staff Not Authenticated!", 400));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);
  if (req.user.role !== "Staff") {
    return next(
      new ErrorHandler(`${req.user.role} not authorized for this resources!`)
    );
  }
  next();
});
