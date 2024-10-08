//VS Codeen. Varmista, että Node.js asennettu ja npm. Aja npm init -y.

const http = require('http');
const fs = require('fs');
const port = 3000; //portin määritys
// tuo sisäänrakennetun http moduulin


const requestHandler = (req, res) => { //käsittelee saapuvat http-pyynnöt
    if (req.url.startsWith('/settings')) {
        fs.readFile('settings.txt', 'utf8', (err, data) => { //lukee tideoston, katso muuten ne ovatko oikeat lukemat!!
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading settings file');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'application/json' }); //Muuttaa datan json-objektiksi.
            res.end(JSON.stringify({ settings: data }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
};

const server = http.createServer(requestHandler); //luo http palvelimen käyttäen http-moduulia

server.listen(port, () => {
    console.log(Server is running on http://localhost:${port}); //kuuntelee tuolla aiemmin määriteltyä porttia 3000
});


//Käynnistä palvelin terminaalissa komennolla node server.js
//tarkista selaimen osoitteesta http://localhost:3000/settings
