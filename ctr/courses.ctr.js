import { read, write } from "../utils/utils.js";
import * as uuid from "uuid";
import path from "path";

const courses = read("courses");

const getCourses = async (req, res) => {

  let getData = courses.filter((el) => {
    if (el.user_id === req.token.id) {
      return el && delete el.id;
    }
  });

  return res.status(200).json(getData);
};

const getCourseOne = async (req, res) => {
  const { id } = req.params;

  const courseList = await courses.filter((el) => el.user_id === req.token.id);

  const foundedCourse = courseList.find((el) => el.id === id);

  if (!foundedCourse)
    return res.status(404).json({ message: "Course not found !!!." });

  // delete foundedCourse.id;
  return res.status(200).json(foundedCourse);
};

const createCourse = async (req, res) => {
  const { image } = req.files;
  const { title, price, author } = req.body;

  const imageName = uuid.v4() + image.name;

  image.mv(path.join(process.cwd(), "./media/", imageName));

  const newCourse = {
    id: uuid.v4(),
    title,
    price,
    author,
    imagePath: "./media/" + imageName,
    user_id: req.token.id,
  };

  courses.push(newCourse);

  write("courses", courses);
  return res.status(201).json({
    message: "Successfully Created.",
  });
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;

  const courseList = courses.filter((el) => el.user_id === req.token.id);

  const foundedCourse = courseList.find((el) => el.id === id);

  if (!foundedCourse)
    return res.status(404).json({ message: "Course not found !!!." });

  courses.forEach((el, idx) => {
    if (el.id === id) {
      courses.splice(idx, 1);
    }
  });

  write("courses", courses);
  return res.status(200).json({ message: "Successfully Deleted." });
};

const updateCourse = async (req, res) => {
  const { image } = req.files;
  const { id } = req.params;
  const { title, price, author } = req.body;

  const courseList = courses.filter((el) => el.user_id === req.token.id);

  const foundedCourse = courseList.find((el) => el.id === id);

  if (!foundedCourse)
    return res.status(404).json({ message: "Course not found !!!." });

  const imageName = uuid.v4() + image.name;

  image.mv(path.join(process.cwd(), "/media/", imageName));

  courses.forEach((el) => {
    if (el.id === id) {
      (el.title = title),
        (el.price = price),
        (el.author = author),
        (el.imagePath = image ? "/media/" + imageName : el.imagePath);
    }
  });

  write("courses", courses);

  res.status(200).json({ message: "Successfully Updated !." });
};

const getAllCourses = async (req, res) => {
  courses.map((el) => {
    return el && delete el.id;
  });

  return res.status(200).json(courses);
};

export {
  getCourses,
  getCourseOne,
  createCourse,
  deleteCourse,
  updateCourse,
  getAllCourses,
};
