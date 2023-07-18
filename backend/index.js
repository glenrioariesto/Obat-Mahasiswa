import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

app.listen(port, () =>
  console.log(`Server berjalan di http://localhost:${port}`)
);
