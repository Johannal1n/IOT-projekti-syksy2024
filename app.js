const express = require('express'); // kirjasto käyttöön
const fs = require('fs'); // tiedostojen luku ja kirjoitus
const path = require('path');
const app = express(); // Express-sovellus
const port = 8080; // portti

// Määritetään staattisten tiedostojen kansio
app.use(express.static(path.join(__dirname)));

app.use(express.json()); // mahdollistaa JSON-pyyntöjen käsittelyn

// Palauttaa nykyisen, tallennetun lämpötilan
app.get('/temperature', (req, res) => {
    try {
        const temperature = JSON.parse(fs.readFileSync('temperature.txt', 'utf-8'));
        res.json(temperature);
    } catch (err) {
        res.status(500).send('Error reading temperature');
    }
});

// Päivittää lämpötilan
app.post('/temperature', (req, res) => {
    const { temperature } = req.body;
    if (temperature) {
        const temperature_to_update = {
            temperature: parseInt(temperature)
        };
        fs.writeFileSync('temperature.txt', JSON.stringify(temperature_to_update));
        res.send('Temperature updated!');
    } else {
        res.status(400).send('Invalid parameters');
    }
});

// Palauttaa asetukset
app.get('/settings', (req, res) => {
    try {
        const settings = JSON.parse(fs.readFileSync('settings.txt', 'utf-8'));
        res.json(settings);
    } catch (err) {
        res.status(500).send('Error reading settings');
    }
});

// Päivittää asetukset
app.post('/settings', (req, res) => {
    const { minTemperature, maxTemperature } = req.body;
    if (minTemperature && maxTemperature) {
        const settings = {
            minTemperature: parseInt(minTemperature),
            maxTemperature: parseInt(maxTemperature)
        };
        fs.writeFileSync('settings.txt', JSON.stringify(settings));
        res.send('Settings updated!');
    } else {
        res.status(400).send('Invalid parameters');
    }
});

// Käynnistää palvelimen
app.listen(port, () => {
    console.log(`Server running at http://10.222.209.100:${port}`);
});
