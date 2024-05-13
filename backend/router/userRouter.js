import express from "express";
import {
  addNewAdmin,
  addNewStaff,
  getAllStaffs,
  getAllStudents,
  getUserDetails,
  login,
  logoutAdmin,
  logoutStaff,
  logoutStudent,
  studentRegister,
  updateStudent,
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isStaffAuthenticated,
  isStudentAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/student/register", studentRegister);
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
router.get("/students", getAllStudents);
router.get("/staffs", getAllStaffs);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/student/me", isStudentAuthenticated, getUserDetails);
router.get("/staff/me", isStaffAuthenticated, getUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/student/logout", isStudentAuthenticated, logoutStudent);
router.get("/staff/logout", isStaffAuthenticated, logoutStaff);
router.post("/staff/addnew", isAdminAuthenticated, addNewStaff);

//update student
router.put("/update/:id", isStudentAuthenticated, updateStudent);

export default router;
