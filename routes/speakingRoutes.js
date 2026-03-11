const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const uploadPath = path.join(__dirname, "..", "uploads");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const upload = multer({ dest: uploadPath });

router.post("/speaking-assessment", upload.single("audio"), (req, res) => {
  try {
    console.log("Speaking route hit");

    if (!req.file) {
      console.log("No audio file received");
      return res.status(400).json({
        error: "Audio file not received"
      });
    }

    const expectedText = req.body.expectedText || "";

    console.log("Expected text:", expectedText);
    console.log("Uploaded file:", req.file.filename);

    const transcript = expectedText || "Demo transcript";
    const accuracy = 85;
    const fluency = 80;
    const completeness = 90;
    const feedback = "Good pronunciation. Keep practicing speaking.";

    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      }
    });

    return res.json({
      transcript,
      accuracy,
      fluency,
      completeness,
      feedback
    });
  } catch (error) {
    console.error("Speaking assessment error:", error);
    return res.status(500).json({
      error: "Internal server error"
    });
  }
});

module.exports = router;