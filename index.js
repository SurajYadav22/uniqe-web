import express from "express";
import { server } from "./config/db.js";
import { createLeads, getAllLeads } from "./controllers/leads.controller.js";
import { adminLogin } from "./controllers/admin.controller.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello!" });
});

app.post("/api/auth/signin", adminLogin);
app.post("/api/leads", createLeads);
app.get("/api/all/leads", getAllLeads);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  server()
    .then(() => console.log("Database connected successfully"))
    .catch((err) => {
      console.log(err, "Error while database connecting");
    });
  console.log(`App is listining on port ${PORT}`);
});
