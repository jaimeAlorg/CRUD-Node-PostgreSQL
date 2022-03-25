const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = require('./routes/userRoutes');

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use('/', router);

app.listen(process.env.PORT, () => {
    console.log(`Running on port: ${process.env.PORT}`);
});
