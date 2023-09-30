import * as uuid from "uuid";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import path from "path";
import { read, write } from "../utils/utils.js";

const users = read("users");

const register = async (req, res) => {
  const { image } = req.files;
  const { username, email, password } = req.body;

  const foundedUser = users.find((el) => el.email === email);

  if (foundedUser)
    return res.status(400).json({ message: "Email already registrated !!!." });

  const imageName = uuid.v4() + image.name;

  image.mv(path.join(process.cwd(), "./media/", imageName));

  const hashPwd = await bcrypt.hash(password, 12);

  const newUser = {
    id: uuid.v4(),
    username,
    email,
    imagePath: "./media/" + imageName,
    password: hashPwd,
  };

  users.push(newUser);

  write("users", users);
  res.status(201).json({ message: "Successfully Registrated." });
};

const login = async (req, res) => {
  const { suppername, password } = req.body;

  const foundedUser = users.find(
    (el) => el.email === suppername || el.username === suppername
  );

  if (!foundedUser)
    return res.status(404).json({ message: "User not found !!!." });

  const checkPwd = await bcrypt.compare(password, foundedUser.password);

  if (checkPwd) {
    let token = await jwt.sign({ id: foundedUser.id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res.status(200).json({ token });
  }

  return res.status(404).json({ message: "Password error !!!." });
};
export { register, login };
