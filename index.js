const express = require("express");
const app = express();
const uri = require('./app/config/db.config.js');
const getToken = require('./app/services/token.service.js');
const cors = require('cors')
const mongoose = require('mongoose');

require('./app/routes/spotify.router')(app);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

mongoose.connect(uri, (err, res) => {

    if (err) throw err;
    console.log("DB is connected")
});
const corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

const PORT = 3000;

app.get('/', async (req, res) => {
    res.send('Spoti')
})
app.listen(PORT, () => {
    console.log('Server listen on port 3000')
})