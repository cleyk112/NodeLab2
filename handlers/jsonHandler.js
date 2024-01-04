export function handleJSON(req, res) {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "JSON response" }));
  }else if (req.method === "POST"){
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "JSON response to a POST method implementation" }));
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }
}
