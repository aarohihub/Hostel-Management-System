import mongoose from "mongoose";

const maintenanceSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  issue: {
    type: String,
    required: true,
  },
  roomName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
});

export const Maintenance = mongoose.model("Maintenance", maintenanceSchema);
