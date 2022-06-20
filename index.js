const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

const assets_route = require('./middlewares/assets_provide/assets');
const score_route = require('./middlewares/score_save/score');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/assets', express.static(path.join(__dirname, '/static')));
app.use('/getAssets', assets_route);
app.use('/score', score_route);

app.listen(process.env.PORT || 3000, (error) => {
	if (error) console.log('Error starting the server');
	else console.log('Server has been started');
});
