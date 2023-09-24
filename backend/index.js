import express from "express";
import cors from "cors";
import UserRoute from "./Route/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

const port = 3001;

app.listen(port, () =>
  console.log(`Server berjalan di http://localhost:${port}`)
);
