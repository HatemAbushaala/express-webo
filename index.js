require("dotenv").config()
const express = require("express")
let app = new express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var PORT = process.env.PORT || 5656
app.listen(PORT, () => {
  console.log("Server started on port " + PORT)
  console.log("http://localhost:" + PORT)
})

// app.use('/barbers', require('./routes/barberRoutes'));

app.get("/", (req, res) => {
  res.send("hello from main page")
})

app.get("*", (req, res) => {
  res.status(404).send()
})
