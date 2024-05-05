import mongoose from "mongoose";
import valildator from "validator";

const messageSchema = new mongoose.Schema({
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
  phone: {
    type: String,
    required: true,
    // minLength: [10, "Phone number must contain exact 10 digits"],
  },
  address: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    // minLength: [10, "Message must contain at least 10 characters"],
  },
});
export const Message = mongoose.model("Message", messageSchema);
