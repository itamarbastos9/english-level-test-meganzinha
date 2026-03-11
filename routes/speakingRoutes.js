const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/speaking-assessment", upload.single("audio"), (req, res) => {
  const expectedText = req.body.expectedText;

  res.json({
    transcript: expectedText,
    accuracy: 85,
    fluency: 80,
    completeness: 90,
    feedback: "Good pronunciation. Keep practicing speaking."
  });
});

module.exports = router;