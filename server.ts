import express from "express";
import calendarRouter from "./calendar/calendar.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!", status: "success" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/calendar", calendarRouter);
