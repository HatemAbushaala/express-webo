const crypto = require("crypto")

const fn = (data, start, ref) => {
  crypto.pbkdf2(data, "salt", 100000, 64, "sha512", () => {
    console.log(ref, Date.now() - start, "ms")
  })
}

module.exports = (input = 1000) => {
  const start = Date.now()
  // this will use multi cores
  for (let i = 0; i < input; i++) {
    fn("This is a CPU-intensive task!", start, i + 1)
  }
  return 0
}

// module.exports = function fibonacci(n) {
//   if (n <= 1) return n
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }
