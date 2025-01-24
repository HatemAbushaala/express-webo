const memoryHeavy = async ({ delay = 100 }) => {
  const data = []

  console.log("Starting memory allocation...")

  try {
    while (true) {
      const mb = 1024 * 1024
      data.push(new Buffer(mb))
      if (delay) await new Promise((resolve) => setTimeout(resolve, delay))
    }
  } catch (error) {
    console.error("Out of memory!", error.message)
  }
}

module.exports = memoryHeavy
