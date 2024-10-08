//VS Codeen. Varmista, että Node.js asennettu ja npm. Aja npm init -y.

const http = require('http');
const fs = require('fs');
const port = 3000;

const requestHandler = (req, res) => {
    if (req.url.startsWith('/asetukset')) {
        fs.readFile('settings.txt', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading settings file');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ settings: data }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(Server is running on http://localhost:${port});
});


//Käynnistä palvelin terminaalissa komennolla node server.js
//tarkista selaimen osoitteesta http://localhost:3000/settings
