const memoryHeavy = async ({ delay = 100 } = {}) => {
  const data = []

  console.log("Starting memory allocation...")

  try {
    while (true) {
      const mb = 1024 * 1024
      data.push(Array(mb).fill(0))

      const memoryUsage = process.memoryUsage()

      console.log(
        `Memory Usage: RSS: ${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB, ` +
          `Heap Total: ${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB, ` +
          `Heap Used: ${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB, ` +
          `External: ${(memoryUsage.external / 1024 / 1024).toFixed(2)} MB, ` +
          `Array Buffers: ${(memoryUsage.arrayBuffers / 1024 / 1024).toFixed(2)} MB`
      )

      if (delay) await new Promise((resolve) => setTimeout(resolve, delay))
    }
  } catch (error) {
    console.error("Out of memory!", error.message)
  }
}
module.exports = memoryHeavy
