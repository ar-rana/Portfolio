const http = require('http');
// const mailer = require('nodemailer');
const PORT = 5000;

const server = http.createServer((req, res) => {
    if (req.method === 'OPTIONS') {
        // Setup CORS headers
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.writeHead(204);
        res.end();
        return;
    };
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');

    let body = [];
    // Maually handle request
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        try {
            const bufferData = Buffer.concat(body); // convert to Buffer Object
            const data = JSON.parse(bufferData);
            console.log("data: ", data);
            handleRequest(req, res, data);
        } catch (err) {
            console.log("Body parsing failed: ", err.message);
            res.statusCode = 400;
            res.end("BAD REQUEST");
            return;
        }
    }).on('error', (err) => {
        console.log("Body parsing failed: ", err.message);
        res.statusCode = 500;
        res.end("SERVER ERROR");
        return;
    });

});

server.listen(PORT, () => {
    console.log(`server live on port ${PORT}`);
});

function verify() {
    console.log("verification done.");
    return true;
}

function handleRequest(req, res, data) {
    switch (req.url) {
        case '/send_email':
            if (verify()) {
                res.statusCode = 200;
                res.write(`email sent to the me 🎉🎉 from: ${data.email}`);
            } else {
                res.statusCode = 401;
                res.write("it seems you are not a human...🤨");
            }
            break;
        case '/verify':
            res.statusCode = 200;
            res.write("server active.");
            break;
        default:
            res.statusCode = 404;
            res.write("REQUEST URL NOT FOUND");
    }
    res.end();
}