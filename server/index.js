const express = require('express');

const {getBands, postBands, updateBands, removeBands} = require('./Controllers/bandsController')

const app = express();

app.use(express.json());

app.get('/api/bands', getBands);
app.post('/api/bands', postBands);
app.put('api/bands/id:', updateBands);
app.delete('api/bands/id:', removeBands);

const PORT = 5001

app.listen(PORT, () => console.log(`Favorite Bands is running on PORT ${PORT}`))