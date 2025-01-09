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
})

// app.use('/barbers', require('./routes/barberRoutes'));

app.get("/", (req, res) => {
  const envString = Object.keys(process.env).map(k=>{
     return k + '=' + process.env[k] 
  }).join('\n')
  
  res.send(`<p>app is running in port ${PORT} </p> \n <p> node version ${process.version} </p> \n <pre>app env \n ${envString}</pre>`)
})

app.get("*", (req, res) => {
  res.status(404).send()
})
