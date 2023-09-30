import oneCourseValidation  from "../validation/oneCourse.validation.js";

const oneCourseValidate = function (req, res, next) {
  try {
    const { error } = oneCourseValidation(req.params);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  } catch (error) {
    console.log(error.message);
  }
};

export default oneCourseValidate;
