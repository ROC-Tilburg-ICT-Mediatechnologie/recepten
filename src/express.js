const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/Recepten')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const gerechtSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    naam: String,
    ingredienten: Array
});

const Gerecht = mongoose.model('Gerecht', gerechtSchema, 'gerechten');

app.get('/check-connection', (req, res) => {
    const state = mongoose.connection.readyState;
    if (state === 1) {
        res.send('Connected to MongoDB');
    } else {
        res.send('Not connected to MongoDB');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));