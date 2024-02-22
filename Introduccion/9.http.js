const http = require("node:http");

const server = http.createServer((req, res) => {
    console.log("request received");
    res.end("Hola servidor de Node");
});

server.listen(0, () => {
    console.log(
        `server listening on port http://localhost:${server.address().port}`
    );
});

/*
server.listen(3000 -> El puerto, () => {
    console.log("server listening on port 3000");
});
*/
