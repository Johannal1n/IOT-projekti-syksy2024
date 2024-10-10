// Ohjelmaa ajetaan node *tiedoston nimi*
 
const express = require('express'); // kirjasto käyttöön
const fs = require('fs'); // file system tarvitaan, jotta voidaan kirjoittaa ja lukea tiedostoa
const app = express(); // käytetään kirjastoa
const port = 8080; // määrittelee portin
 
app.get('/changeSettings', (req, res) => { //osoite, mihin mennään, localhost
                                            // voi tehdä useita, kun kopioi ja käyttää eri nimeä
                                            // request ja response
    if(req.query.min){ // katsoo onko requestyssä query tieto min
    //aseta req.query.min;
        fs.writeFile('min.txt', req.query.min, (err) => { //min.txt, tiedosto, pilkun jälkeen tulee se, mitä tiedostoon kirjoitetaan
            if (err) {
                console.error('Error:', err);
                return res.status(500).send('error');
            }
            res.send('Min: ' + req.query.min + ' updated.');
        });
    }else{
        //näytä asetukset
        fs.readFile('min.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error:', err);
                return res.status(500).send('error');
            }
            res.send('Min: ' + data);
        });
    }
   });  
 
 
// starttaa palvelun
app.listen(port, () => {
    console.log(`Simple backend @ http://localhost:${port}`); //localhost ja ipaddress
   });
