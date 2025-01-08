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
  const envjson = JSON.stringify(process.env)
  const envString = Object.keys(envjson).map(k=>{
     return k + '=' + envjson[k] 
  }).join('\n')
  
  res.send(`app is running in port ${PORT} \n node version ${process.version} \n app env \n ${envString}`)
})

app.get("*", (req, res) => {
  res.status(404).send()
})
