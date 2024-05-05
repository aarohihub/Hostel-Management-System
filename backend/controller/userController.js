// Import required modules and functions
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwtToken.js";
import cloudinary from "cloudinary";

// Register a new student
export const studentRegister = catchAsyncErrors(async (req, res, next) => {
  const {
    fullName,
    email,
    password,
    phone,
    nic,
    dob,
    gender,
    address,
    collegeName,
    role,
  } = req.body;

  // Check if all required fields are provided
  if (
    !fullName ||
    !email ||
    !password ||
    !phone ||
    !nic ||
    !dob ||
    !gender ||
    !address ||
    !collegeName ||
    !role
  ) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }

  // Check if a user with the same email already exists
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already exists", 400));
  }

  // Create a new user (student)
  user = await User.create({
    fullName,
    email,
    password,
    phone,
    nic,
    dob,
    gender,
    address,
    collegeName,
    role,
  });

  // Generate and send a JWT token as a response
  generateToken(user, "User Registered!", 200, res);
});

// User login
export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password, role } = req.body;

  // Check if email, password, and role are provided
  if (!email || !password || !role) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }

  // Find the user by email and select the password field
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  // Check if the provided password matches the stored password
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  // Check if the user's role matches the provided role
  if (role !== user.role) {
    return next(new ErrorHandler("User with this role not found", 401));
  }

  // Generate and send a JWT token as a response
  generateToken(user, "User Logged In Successfully!", 200, res);
});

// Add a new admin
export const addNewAdmin = catchAsyncErrors(async (req, res, next) => {
  const { fullName, email, phone, password, gender, address, dob, nic } =
    req.body;

  // Check if all required fields are provided
  if (
    !fullName ||
    !email ||
    !phone ||
    !password ||
    !gender ||
    !address ||
    !dob ||
    !nic
  ) {
    return next(new ErrorHandler("Please fill in all fields", 400));
  }

  // Check if a user with the same email already exists
  const isRegistered = await User.findOne({ email });
  if (isRegistered) {
    return next(
      new ErrorHandler(`${isRegistered.role} with this email already exists!`)
    );
  }

  // Create a new admin user
  const admin = await User.create({
    fullName,
    email,
    phone,
    password,
    gender,
    address,
    dob,
    nic,
    role: "Admin",
  });

  res.status(200).json({
    success: true,
    message: "New Admin Registered!",
  });
});

export const getAllStudents = catchAsyncErrors(async (req, res, next) => {
  const students = await User.find({ role: "Student" });
  res.status(200).json({
    success: true,
    students,
  });
});

export const getAllStaffs = catchAsyncErrors(async (req, res, next) => {
  const students = await User.find({ role: "Staff" });
  res.status(200).json({
    success: true,
    students,
  });
});

export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});

//Admin Logout
export const logoutAdmin = catchAsyncErrors(async (req, res, next) => {
  res
    .status(200)
    .cookie("adminToken", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Admin Log Out Successfully!",
    });
});

//Student Logout
export const logoutStudent = catchAsyncErrors(async (req, res, next) => {
  res
    .status(200)
    .cookie("studentToken", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Student Log Out Successfully!",
    });
});

//Staff Logout
export const logoutStaff = catchAsyncErrors(async (req, res, next) => {
  res
    .status(200)
    .cookie("staffToken", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Staff Log Out Successfully!",
    });
});

//Add new staff
export const addNewStaff = catchAsyncErrors(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Staff Avatar Required!", 400));
  }
  const { staffAvatar } = req.files;
  const allowedFormats = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
  if (!allowedFormats.includes(staffAvatar.mimetype)) {
    return next(new ErrorHandler("File Format Not Supported!", 400));
  }
  const {
    fullName,
    email,
    password,
    phone,
    nic,
    dob,
    gender,
    address,
    staffDepartment,
  } = req.body;
  if (
    !fullName ||
    !email ||
    !phone ||
    !password ||
    !gender ||
    !address ||
    !dob ||
    !nic ||
    !staffDepartment
  ) {
    return next(new ErrorHandler("Please Provide Full Details!", 400));
  }
  const isRegistered = await User.findOne({ email });
  if (isRegistered) {
    return next(
      new ErrorHandler(
        `${isRegistered.role} already registered with this email`,
        400
      )
    );
  }
  const cloudinaryResponse = await cloudinary.uploader.upload(
    staffAvatar.tempFilePath
  );
  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.error(
      "Cloudinary error:",
      cloudinaryResponse.error || "Unknown Cloudinary Error"
    );
  }
  const staff = await User.create({
    fullName,
    email,
    password,
    phone,
    nic,
    dob,
    gender,
    address,
    staffDepartment,
    role: "Staff",
    staffAvatar: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
  });
  res.status(200).json({
    success: true,
    message: "New Staff Registered!",
    staff,
  });
});