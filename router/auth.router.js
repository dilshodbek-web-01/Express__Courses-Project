import { Router } from "express";
import { register, login } from "../ctr/auth.ctr.js";
import userValidate from "../middleware/user.middleware.js";

const router = Router();

router.post("/register", userValidate, register);
router.post("/login", login);

export default router;
