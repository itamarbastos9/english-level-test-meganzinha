const express = require("express")
const app = express()

const questionsRoutes = require("./routes/questionsRoutes")

app.use(express.json())
app.use(express.static("public"))

app.use("/questions", questionsRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})