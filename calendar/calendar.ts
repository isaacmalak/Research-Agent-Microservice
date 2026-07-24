import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  console.log("This is the webhook route", req.body, req.headers);
  res.status(200).json({ message: "Hello from the webhook route" });
});

export default router;
