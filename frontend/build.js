require("dotenv").config()
const fs = require('fs')
const path = require('path')
const api_url = process.env.API_URL

const html_content = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button onClick="click">test</button>
  </body>

  <script>
    async function click(){
        const res = await fetch('${api_url}',{
            method:'GET',
        })
        console.log(res.body)
    }
  </script>
</html>
`
console.log("build...")
fs.writeFileSync(path.join(__dirname,'public/index.html'),html_content)
console.log("build successfully")
