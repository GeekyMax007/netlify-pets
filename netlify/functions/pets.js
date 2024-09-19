const handler = async () => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: "ayo".toUpperCase()
  }
}

module.exports = { handler }