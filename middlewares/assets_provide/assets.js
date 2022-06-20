const express = require('express');
const path = require('path');

const bikeCheck = require('../../handlers/assets_provide/bike_color');
const getCarsList = require('../../handlers/assets_provide/cars_get');

const router = express.Router();

/**
 *  A router.get function that is used to get the color of the bike and return the link of the bike
 */
router.get('/bikes/:color', async (request, response) => {
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

router.get('/cars', async (request, response) => {
	const currentHost = request.headers.host;
	const protocol = request.protocol;

	try {
		let carsList = await getCarsList();
		carsList = carsList.map((value) => {
			return `${protocol}://${currentHost}/assets/images/car-assets/${value}`;
		});
		response.status(200).send({
			list: carsList,
		});
	} catch (e) {
		console.log(e);
		response.status(404).send({
			err: 'Error loading Image',
		});
	}
});

module.exports = router;
