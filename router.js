import { handleIndex } from "./handlers/index.js";
import { handleJSON } from "./handlers/jsonHandler.js";
import { handleXML } from "./handlers/xmlHandler.js";


export function handleRequest(req, res, parsedUrl) {
  const { pathname } = parsedUrl;

  switch (pathname) {
    case "/":
      handleIndex(req, res);
      break;
    case "/json":
      handleJSON(req, res);
      break;
    case "/xml":
      handleXML(req, res);
      break;
    default:
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Not Found" }));
  }
}
