const memoryHeavy = async ({ delay = 100 }) => {
  let str = ""

  console.log("Starting memory allocation...")

  try {
    while (true) {
      const mb = 1024 * 1024
      str += "a".repeat(mb)

      const sizeInBytes = Buffer.byteLength(str, "utf8")
      console.log(`String size: ${sizeInBytes / mb} mb`)

      await new Promise((resolve) => setTimeout(resolve, delay))
    }
  } catch (error) {
    console.error("Out of memory!", error.message)
  }
}

module.exports = memoryHeavy
