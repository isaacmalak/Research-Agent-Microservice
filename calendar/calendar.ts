import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req);
  res.json({ message: "Hello from the webhook route" });
});

export default router;
