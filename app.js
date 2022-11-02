const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT || 4500;

const adminRouter = require('./api/admin/admin.router');
const reviewRouter = require('./api/review/review.router');
const galeryRouter = require('./api/galery/galery.router');
const dampakRouter = require('./api/dampak/dampak.router');
const bukuRouter = require('./api/buku/buku.router');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/admin', adminRouter);
app.use('/review', reviewRouter);
app.use('/galery', galeryRouter);
app.use('/proyek', dampakRouter);
app.use('/buku', bukuRouter);

app.get('', (req, res) => {
    res.json("aman");
});

app.listen(port, () => {
    console.log(`app run at port ${port}`);
});