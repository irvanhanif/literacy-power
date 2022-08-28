const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 4500;

app.use(express.json());
app.use(cors());

app.get('', (req, res) => {
    res.json("aman");
});

app.listen(port, () => {
    console.log(`app run at port ${port} db name : ${process.env}`);
});