const express = require('express');
const path = require('path');

const bikeCheck = require('./../../handlers/assets_provide/bike_color');

const router = express.Router();

router.get('/:color', async (request, response) => {
	const currentHost = request.headers.host;
	const protocol = request.protocol;
	try {
		let color = request.params.color;
		let bikeAvailable = await bikeCheck(color);
		if (bikeAvailable) {
			let pathToReturn = `${protocol}://${currentHost}/assets/images/bike-assets/${color}.png`;
			response.status(200).send({
				link: pathToReturn,
			});
		}
	} catch {
		response.status(404).send({
			err: 'Bike Color not found',
		});
	}
});

module.exports = router;
