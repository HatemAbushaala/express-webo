console.log(process.env)
console.log("build...")
console.log("node version", process.version)

const timeArg = process.argv[2]
let minutes = 1

// check if number
if (!isNaN(timeArg)) {
  minutes = timeArg
}
console.log("🚀 ~ build will take:", minutes, "minutes")
const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

sleep(minutes * 60 * 1000)
  .then((result) => {
    console.log("build successfully")
  })
  .catch((err) => {
    console.log("build failed")
  })
