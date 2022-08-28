const http = require('http');

const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola mundo');
})

let PORT = 8082

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})