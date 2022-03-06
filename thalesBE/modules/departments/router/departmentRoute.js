

import express from "express";
import DepartmentController from "../controller/department.controller.js";
const router = express.Router();
// Log middleware
router.use((req, res, next) => {
  console.log(
    `Incomming api in Departments route : ${req.method}:${req.url} ${res.statusCode}`
  );
  next();
});
router.post("/", DepartmentController.insertDepartment);
router.put("/", DepartmentController.editDepartment);
router.get("/", DepartmentController.getAllDepartments);
router.get("/:_id", DepartmentController.getDepartmentById);
router.delete("/:_id", DepartmentController.deleteDepartment);


export default router;