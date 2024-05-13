import express from "express";
import {
  deleteMaintenance,
  getAllMaintenance,
  getAllMaintenanceByDepartment,
  postRequest,
  updateMaintenanceStatus,
} from "../controller/maintenanceController.js";

import {
  isAdminAuthenticated,
  isStaffAuthenticated,
  isStudentAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isStudentAuthenticated, postRequest);
router.get("/getall", isAdminAuthenticated, getAllMaintenance);
router.get("/getall", isStaffAuthenticated, getAllMaintenance);
router.get(
  "/getbydepartment/:department",
  isStaffAuthenticated,
  getAllMaintenanceByDepartment
);
router.put("/update/:id", isAdminAuthenticated, updateMaintenanceStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteMaintenance);

export default router;
