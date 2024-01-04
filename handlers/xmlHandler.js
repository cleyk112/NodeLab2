export function handleXML(req, res) {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/xml" });
    res.end("<response><message>This is an example of an XML message</message></response>");
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }
}
