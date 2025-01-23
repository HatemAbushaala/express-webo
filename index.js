require("dotenv").config()
const express = require("express")
let app = new express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

if (process.env.THROW) throw new Error("App crashed")

var PORT = process.env.PORT || 5656
app.listen(PORT, () => {
  console.log("Server started on port " + PORT)
  console.log("http://localhost:" + PORT)
  console.log("node version " + process.version + "| process id:" + process.pid)
})

// app.use('/barbers', require('./routes/barberRoutes'));

app.get("/", (req, res) => {
  const envString = Object.keys(process.env)
    .map((k) => {
      return k + "=" + process.env[k]
    })
    .join("\n")
  res.send(`<h3>app is running in port ${PORT} </h3> \n <h4> node version ${process.version} </h4> \n <pre>app env \n ${envString}</pre>`)
})

app.get("/memory", async (req, res) => {
  const delay = req.query.delay ?? 100

  await require("./lib/memory-heavy-action")({
    delay,
  })

  return res.send("ok")
})
app.get("/cpu", (req, res) => {
  const input = req.query.input
  const result = require("./lib/cpu-heavy-action")(input)

  return res.send(`result: ${result}`)
})



app.get("*", (req, res) => {
  res.status(404).send()
})
