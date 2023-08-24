const express = require('express');
const mongoose = require('mongoose');
const hotelRouter = require('./routes/index')

const app = express();
const PORT = process.env.PORT || 9000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.json());
app.use("/api", hotelRouter);

app.get("/", (req, res) => {
    res.send("Welcome");
});

mongoose
.connect("mongodb+srv://mariamobiledev:CheilTest@cluster0.gyywue9.mongodb.net/")
.then(() => console.log('Connection to Atlas OK'))
.catch((error) => console.error(error))
;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});