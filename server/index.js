const express = require('express');

const {getBands, postBand, updateBand, removeBand} = require('./Controllers/bandsController')

const app = express();

app.use(express.json());

app.get('/api/bands', getBands);
app.post('/api/bands', postBand);
app.put('/api/bands/:id', updateBand);
app.delete('/api/bands/:id', removeBand);

const PORT = 5005

app.listen(PORT, () => console.log(`Favorite Bands is running on PORT ${PORT}`))