import express from "express";
import { addRoom, getAllRooms } from "../controller/roomAddController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/addnew", isAdminAuthenticated, addRoom);
router.get("/getall", getAllRooms);

// router.get("/get/:id", isAdminAuthenticated, getRoom);
// router.put("/update/:id", isAdminAuthenticated, updateRoom);

// router.delete("/delete/:id", isAdminAuthenticated, deleteRoom);

export default router;
