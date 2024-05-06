import express from "express";
import {} from "../controller/roomAddController";
import { isAdminAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/addnew", isAdminAuthenticated, addRoom);
router.get("/getall", isAdminAuthenticated, getRooms);

router.get("/get/:id", isAdminAuthenticated, getRoom);
router.put("/update/:id", isAdminAuthenticated, updateRoom);

router.delete("/delete/:id", isAdminAuthenticated, deleteRoom);
