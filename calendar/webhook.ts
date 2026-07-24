import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const message = req.body?.message;

  // const call = message.call;

  // const data = {
  //   customerNumber: call?.customer?.number ?? null,
  //   recordingUrl: message.recordingUrl ?? message.artifact?.recordingUrl ?? null,
  //   createdAt: call?.createdAt ?? null,
  //   phoneNumber: message.phoneNumber?.number ?? null,
  // };

  // console.log("Extracted call data:", data);
  console.log("Received webhook payload:", req.body);
  res.status(200).json(req.body);
});

export default router;
