const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const bike_route = require('./middlewares/assets_provide/assets');

dotenv.config();

const app = express();

app.use('/assets', express.static(path.join(__dirname, '/static')));
app.use('/getAssets', bike_route);

app.listen(process.env.PORT || 3000, (error) => {
	if (error) console.log('Error starting the server');
	else console.log('Server has been started');
});
