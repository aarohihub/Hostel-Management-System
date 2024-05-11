import express from "express";
import {
  addRoom,
  getAllRooms,
  getRoom,
} from "../controller/roomAddController.js";
import {
  isAdminAuthenticated,
  isStudentAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/addnew", isAdminAuthenticated, addRoom);
router.get("/getall", getAllRooms);

router.get("/getrooms/:id", isStudentAuthenticated, getRoom);
// router.put("/update/:id", isAdminAuthenticated, updateRoom);

// router.delete("/delete/:id", isAdminAuthenticated, deleteRoom);

export default router;
