const { exec } = require("child_process")

exec("node index.js", { shell: true, cwd: __dirname }, (error, stdout, stderr) => {
  console.log(stdout)
  console.log(stderr)
  if (error !== null) {
    console.log(`exec error: ${error}`)
  }
})
