import express from "express";
import courseValidate from "../middleware/course.middleware.js";
import oneCourseValidate from "../middleware/oneCourse.middleware.js";
import {
  getCourses,
  getCourseOne,
  createCourse,
  deleteCourse,
  updateCourse,
  getAllCourses,
} from "../ctr/courses.ctr.js";

const router = express.Router();

router.get("/read", getCourses);
router.post("/create", courseValidate, createCourse);
router.get("/read/:id", oneCourseValidate, getCourseOne);
router.delete("/delete/:id", oneCourseValidate, deleteCourse);
router.put("/update/:id", courseValidate, updateCourse);
router.get("/readAll", getAllCourses);

export default router;
