import express from "express";
import webhook from "./calendar/webhook.js";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json());
app.use("/webhook", webhook);
