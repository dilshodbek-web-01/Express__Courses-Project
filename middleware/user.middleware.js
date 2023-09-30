import userValidation  from "../validation/user.validation.js";

const userValidate = function (req, res, next) {
  try {
    const { error } = userValidation(req.body);
    console.log(req.body);
    if (error) {
      console.log(error);
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  } catch (error) {
    console.log(error.message);
  }
};

export default userValidate;
