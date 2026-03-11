const express = require("express");

const app = express();

const questionsRoutes = require("./routes/questionsRoutes");
const speakingRoutes = require("./routes/speakingRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/questions", questionsRoutes);
app.use("/api", speakingRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});