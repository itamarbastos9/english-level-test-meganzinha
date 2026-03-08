const express = require("express")
const router = express.Router()

const {
  getQuestions,
  checkAnswer,
  saveResult,
  getResults
} = require("../controllers/questionsController")

router.get("/", getQuestions)
router.post("/answer", checkAnswer)
router.post("/result", saveResult)
router.get("/results", getResults)

module.exports = router