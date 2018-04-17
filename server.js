const express = require('express');
const apicache = require('apicache');

require('es6-promise').polyfill();
require('isomorphic-fetch');
require('dotenv').config();


const port = 3001;
let app = express(); 
let cache = apicache.middleware;
const server = require('http').createServer(app);  

// cache all routes - Static API only allows 10 requests per hour
app.use(cache('20 minutes'));
      
// Test server is working (GET http://localhost:3001/api)
app.get('/api/', function(req, res) {
    console.log(req.query);
    res.json({ message: 'Testing proxy server 1,2' });   
});

const API_KEY = process.env.API_KEY;

app.get('/api/champions/', function(req, res) {

    // Fetch function
    const fetchData = (url) => {
        fetch(url)
        .then(function(response) {
            if (response.status != 200) {
                console.log(res.status(response));
                console.log(res.status(response.status));
            }
            return response.json();
        })
        .then(function(payload) {
            res.status(200).json(payload);
        });
    }

    // the data we need to get
    //const championData = `https://euw1.api.riotgames.com/lol/static-data/v3/champions/${req.query.id}?locale=en_GB&champData=all&api_key=${API_KEY}`;
    const allChampsData = `https://euw1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&champListData=all&tags=all&api_key=${API_KEY}
    `;

    // simply run a query based on the query string - no query = all champions
    if (req.query.getsingle === 'true') {
        try {
            fetchData(championData); 
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            fetchData(allChampsData);
        } catch (error) {
            console.log(error);
        }
    } 
});

// Start the server
server.listen(port);
console.log('Server is listening on port ' + port);