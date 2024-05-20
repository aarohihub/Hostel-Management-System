import mongoose from "mongoose";
import valildator from "validator";

const messageSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minLength: [6, "Full Name must contain at least 6 characters"],
  },

  message: {
    type: String,
    required: true,
    // minLength: [10, "Message must contain at least 10 characters"],
  },
});
export const Message = mongoose.model("Message", messageSchema);
