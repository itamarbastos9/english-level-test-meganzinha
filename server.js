const express = require("express");
const path = require("path");

const app = express();

const questionsRoutes = require("./routes/questionsRoutes");
const speakingRoutes = require("./routes/speakingRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/questions", questionsRoutes);
app.use("/api", speakingRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});