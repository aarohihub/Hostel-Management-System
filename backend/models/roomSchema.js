import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  roomName: {
    type: String,
    required: true,
  },

  roomPrice: {
    type: Number,
    required: true,
  },
  roomImage: {
    public_id: String,
    url: String,
  },
  roomDescription: {
    type: String,
    required: true,
  },
  roomStatus: {
    type: String,
    required: true,
    enum: ["Available", "Full"],
    default: "Available",
  },
});

export const Room = mongoose.model("Room", roomSchema);
