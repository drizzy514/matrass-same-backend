require("dotenv").config();
const cors = require("cors");
const express = require("express");


const matrassMain = require('./modules/matrassMain/matrassMain');
const getMainNumber  = require("./modules/mainNumber/mainNumber");
const port = process.env.PORT ?? 3020;

// Middleware
const app = express();
app.use(cors());
app.use(express.json());



// Routers
app.use('/matrassMain', matrassMain)
app.use('/number', getMainNumber);



// Spinning up server
app.listen(port, () => console.info(`Listening on ${port}...`));
