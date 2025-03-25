const http = require('http');
// const mailer = require('nodemailer');
const PORT = 5000;
const RECAPTCHA_SECRET = process.env.NODE_RECAPTCHA_SECRET;

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

async function verify(token) {
    console.log("key: ", RECAPTCHA_SECRET);
    try {
        const res = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${token}`, {
            method: "POST",
        });
        const response = await res.json();
        console.log("reCaptcha: ", response);

        return response.success;
    } catch (e) {
        console.log(e.message);
        return false;
    }
}

async function handleRequest(req, res, data) {
    switch (req.url) {
        case '/send_email':
            const verified = await verify(data.token);
            if (verified) {
                res.statusCode = 200;
                res.write(`email sent to the Aryan Rana 🎉🎉 from: ${data.email}`);
            } else {
                res.statusCode = 401;
                res.write("either you are not a human...🤨, or just redo the CAPTCHA");
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