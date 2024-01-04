export function handleIndex(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome to the homepage! try adding /xml or /json to see the two possible routes");
}
