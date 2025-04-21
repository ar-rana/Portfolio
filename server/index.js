const http = require('http');
const mailer = require('nodemailer');
require('dotenv').config();

const PORT = 5000;
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;

 let transporter = mailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: process.env.TRANSPORTER_USER,
      pass: process.env.TRANSPORTER_PASS,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
});

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

async function verify(token) {
    // console.log("key: ", RECAPTCHA_SECRET);
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

async function sendMail(from, content, subject) {
    var message = {
        from: from,
        to: process.env.SEND_TO,
        subject: `Via Portfolio, Subject: ${subject}` ,
        text: content
    };

    transporter.sendMail(message, (err) => {
        if (err) {
            console.log(err);
            return false;
        }
    })
    return true;
}

async function handleRequest(req, res, data) {
    switch (req.url) {
        case '/send_email':
            const verified = await verify(data.token);
            if (verified) {
                const sent = await sendMail(data.email, data.content, data.subject);
                if (sent) {
                    res.write(`email successfully sent to the Aryan Rana 🎉🎉 from: ${data.email}`);
                } else {
                    res.write(`Sorry for the inconvinience, some error occured, 
                        you may try again or reach out via LinkedIn @linkedin.com/in/-aryan-rana`);
                }
                res.statusCode = 200;
            } else {
                res.statusCode = 401;
                res.write("either you are not a human.....🤨, or just redo the CAPTCHA");
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

server.listen(PORT, () => {
    console.log(`server live on port ${PORT} at: ${(new Date()).getTime()}`);
});

transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log(`SMTP server Active at: ${(new Date()).getTime()}`);
    }
});