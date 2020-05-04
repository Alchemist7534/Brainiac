const myRoutes = require('./app/routes.js');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://Alchemist:Alchemist22@alchemist-iyho1.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true});

/*app.use('/', function () {
	require('./app/routes')
	});*/
app.listen(8000, () => console.log('server on '));
