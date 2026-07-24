import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
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

  try {
    const ghlResponse = await fetch(
      "https://services.leadconnectorhq.com/hooks/SHuJusL6JEW1OIZqQSIz/webhook-trigger/463ddc80-be48-45e2-ae10-90580d86cbec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );
    console.log(
      "Webhook payload forwarded to LeadConnectorHQ. Response status:",
      ghlResponse
    );
    console.log("Webhook payload forwarded successfully.");
  } catch (error) {
    console.error("Error processing webhook payload:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
  res.status(200).json(req.body);
});

export default router;
