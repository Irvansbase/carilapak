require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const DIGIFLAZZ_URL = 'https://api.digiflazz.com/v1/price-list';
const username = process.env.DIGIFLAZZ_USERNAME;
const apiKey = process.env.DIGIFLAZZ_API_KEY;

// Endpoint untuk mendapatkan daftar harga produk
app.get('/price-list', async (req, res) => {
    try {
        const response = await axios.post(DIGIFLAZZ_URL, {
            cmd: 'price-list',
            username: username,
            sign: require('crypto').createHash('md5').update(username + apiKey + 'pricelist').digest('hex')
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
