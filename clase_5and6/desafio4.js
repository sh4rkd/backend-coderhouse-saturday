const http = require('http');


const msg = () => {
    let hour = new Date().getHours();
    return hour < 12 ? "Buenos días FRED" : hour < 18 ? "Buenas tardes" : "Buenas noches";
}

const PORT = 8082

const app = http.createServer((req, res) => {
    //res end with utf8
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(msg());

}).listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});