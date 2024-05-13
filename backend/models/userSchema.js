import mongoose from "mongoose";
import valildator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minLength: [6, "Full Name must contain at least 6 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [valildator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    minLength: [8, "Password must contain at least 8 characters!"],
    select: false,
  },
  phone: {
    type: String,
    required: true,
    // minLength: [10, "Phone number must contain exact 10 digits"],
  },
  nic: {
    type: String,

    // minLength: [13, "NIC must contain exact 10 digits"],
    // maxLength: [13, "NIC must contain exact 10 digits"],
  },
  dob: {
    type: Date,
    required: [true, "DOB is required"],
  },
  gender: {
    type: String,

    enum: ["Male", "Female"],
  },
  address: {
    type: String,
    required: true,
  },
  collegeName: {
    type: String,
    required: function () {
      return this.role === "Student";
    },
  },
  role: {
    type: String,
    required: true,
    enum: ["Admin", "Staff", "Student"],
  },
  staffDepartment: {
    type: String,
  },
  staffAvatar: {
    public_id: String,
    url: String,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};
export const User = mongoose.model("User", userSchema);
