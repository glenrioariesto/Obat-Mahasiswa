import express from "express";
import cors from "cors";
import UserRoute from "./Route/UserRoute.js";
import partnersRouter from "./Route/PartnerRoute.js";
import doctorRouter from "./Route/DoctorRoute.js";
import appointmentsRouter from "./Route/AppointmentRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(partnersRouter);
app.use(doctorRouter);
app.use(appointmentsRouter);
const port = 3001;

app.listen(port, () =>
  console.log(`Server berjalan di http://localhost:${port}`)
);
