const express = require ("express");
const router = express.Router();

const StudentController = require("../controllers/studentcontroller");
// const CourseController = require("..//Controllers/CourseController");

router.post("/register",StudentController.createStudent);
router.post("/login",StudentController.loginStudent);

module.exports = router;