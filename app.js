import * as dotenv from "dotenv";
import express from "express";
import fileUpload from "express-fileupload";
import path from "path";
import cors from "cors";

dotenv.config();

// routes
import authRouter from "./router/auth.router.js";
import coursesRouter from "./router/courses.router.js";
import tokenMiddleware from "./middleware/token.middleware.js";

const port = process.env.PORT || 7779;

const app = express();
app.use(express.json());
app.use(fileUpload());
app.use(express.static(path.join(process.cwd(), "media")));
app.use(cors());

app.use("/auth", authRouter);
app.use(tokenMiddleware);
app.use("/auth", authRouter);

app.use("/course", coursesRouter);

app.use("/*", (req, res) => {
  res.json({ message: "NOT FOUND !!!." });
});

app.listen(port, () => console.log(port));
