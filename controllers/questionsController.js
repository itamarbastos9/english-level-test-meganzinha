const questions = require("../data/questions")

let results = []

const getQuestions = (req, res) => {
  const safeQuestions = questions.map((q) => ({
    id: q.id,
    level: q.level,
    question: q.question,
    options: q.options
  }))

  res.json(safeQuestions)
}

const checkAnswer = (req, res) => {
  const { id, answer } = req.body

  const question = questions.find((q) => q.id === id)

  if (!question) {
    return res.status(404).json({ message: "Question not found" })
  }

  const correct = question.answer.toLowerCase() === answer.toLowerCase()

  res.json({
    correct,
    correctAnswer: question.answer
  })
}

const saveResult = (req, res) => {
  const { name, email, score, level } = req.body

  const result = {
    name,
    email,
    score,
    level,
    date: new Date()
  }

  results.push(result)

  console.log("New test result:", result)

  res.json({ message: "Result saved" })
}

const getResults = (req, res) => {
  res.json(results)
}

module.exports = {
  getQuestions,
  checkAnswer,
  saveResult,
  getResults
}