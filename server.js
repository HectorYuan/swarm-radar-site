const http = require("http"), fs = require("fs"), path = require("path");
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  fs.createReadStream(path.join(__dirname, "index.html")).pipe(res);
}).listen(port, "0.0.0.0", () => console.log("on " + port));
