import express from "express";
import {
  getAllMessages,
  sendMessage,
} from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";
import { RoomBook } from "../models/roomBook.js";
import {
  bookRoom,
  findRooms,
  getAllBookedRooms,
  getBookedRoomsByUserId,
} from "../controller/roomBook.controller.js";

const router = express.Router();

router.post("/book", bookRoom);
router.get("/getMyOrders", findRooms);
router.get("/bookedrooms", getAllBookedRooms);
router.get("/bookedrooms/:userId", getBookedRoomsByUserId);

export default router;
