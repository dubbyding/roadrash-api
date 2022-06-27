const express = require('express');
const path = require('path');

const bikeCheck = require('../../handlers/assets_provide/bike_color');
const getAssetsList = require('../../handlers/assets_provide/cars_get');

const router = express.Router();

router.get('/bikes/player', async (request, response) => {
	const currentHost = request.headers.host;
	const protocol = request.protocol;
	const currentAssetsPath = '../../static/images/bike-assets';

	try {
		let bikeList = await getAssetsList(currentAssetsPath);
		bikeList = bikeList
			.filter((value) => {
				return value != 'police.png';
			})
			.map((value) => {
				return `${protocol}://${currentHost}/assets/images/bike-assets/${value}`;
				return;
			});
		response.status(200).send({
			list: bikeList,
		});
	} catch (e) {
		response.status(404).send({
			err: 'Error loading Image',
		});
	}
});

/**
 *  A router.get function that is used to get the color of the bike and return the link of the bike
 */
router.get('/bikes/player/:color', async (request, response) => {
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

router.get('/bikes/police', async (request, response) => {
	const currentHost = request.headers.host;
	const protocol = request.protocol;
	const currentAssetsPath = '../../static/images/bike-assets';

	try {
		let bikeList = await getAssetsList(currentAssetsPath);
		bikeList = bikeList
			.filter((value) => value == 'police.png')
			.map((value) => {
				return `${protocol}://${currentHost}/assets/images/bike-assets/${value}`;
			});
		response.status(200).send({
			list: bikeList,
		});
	} catch (e) {
		response.status(404).send({
			err: 'Error loading Image',
		});
	}
});

/**
 * Get list of cars assets
 */
router.get('/cars', async (request, response) => {
	const currentHost = request.headers.host;
	const protocol = request.protocol;
	const currentAssetsPath = '../../static/images/car-assets';

	try {
		let carsList = await getAssetsList(currentAssetsPath);
		carsList = carsList.map((value) => {
			return `${protocol}://${currentHost}/assets/images/car-assets/${value}`;
		});
		response.status(200).send({
			list: carsList,
		});
	} catch (e) {
		response.status(404).send({
			err: 'Error loading Image',
		});
	}
});

/**
 * Get list of farm assets
 */
router.get('/farm', async (request, response) => {
	const currentHost = request.headers.host;
	const protocol = request.protocol;
	const currentAssetsPath = '../../static/images/Farm-assets';

	try {
		let farmList = await getAssetsList(currentAssetsPath);
		farmList = farmList.map((value) => {
			return `${protocol}://${currentHost}/assets/images/Farm-assets/${value}`;
		});
		response.status(200).send({
			list: farmList,
		});
	} catch (e) {
		response.status(404).send({
			err: 'Error loading Image',
		});
	}
});

/**
 * Get list of road assets
 */
router.get('/road', async (request, response) => {
	const currentHost = request.headers.host;
	const protocol = request.protocol;
	const currentAssetsPath = '../../static/images/road-assets';

	try {
		let roadList = await getAssetsList(currentAssetsPath);
		roadList = roadList.map((value) => {
			return `${protocol}://${currentHost}/assets/images/road-assets/${value}`;
		});
		response.status(200).send({
			list: roadList,
		});
	} catch (e) {
		response.status(404).send({
			err: 'Error loading Image',
		});
	}
});

/**
 * Get list of tree assets
 */
router.get('/tree', async (request, response) => {
	const currentHost = request.headers.host;
	const protocol = request.protocol;
	const currentAssetsPath = '../../static/images/tree-assets';

	try {
		let treeList = await getAssetsList(currentAssetsPath);
		treeList = treeList.map((value) => {
			return `${protocol}://${currentHost}/assets/images/tree-assets/${value}`;
		});
		response.status(200).send({
			list: treeList,
		});
	} catch (e) {
		response.status(404).send({
			err: 'Error loading Image',
		});
	}
});

/**
 * Get list of building assets
 */
router.get('/building', async (request, response) => {
	const currentHost = request.headers.host;
	const protocol = request.protocol;
	const currentAssetsPath = '../../static/images/building-assets';

	try {
		let buildingList = await getAssetsList(currentAssetsPath);
		buildingList = buildingList.map((value) => {
			return `${protocol}://${currentHost}/assets/images/building-assets/${value}`;
		});
		response.status(200).send({
			list: buildingList,
		});
	} catch (e) {
		response.status(404).send({
			err: 'Error loading Image',
		});
	}
});

router.get('/bikeAudio', async (request, response) => {
	const currentHost = request.headers.host;
	const protocol = request.protocol;
	const currentAssetsPath = '../../static/audio';
	try {
		let audioList = await getAssetsList(currentAssetsPath);
		audioList = audioList.map((value) => {
			return `${protocol}://${currentHost}/assets/audio/${value}`;
		});
		response.status(200).send({
			list: audioList,
		});
	} catch (e) {
		response.status(404).send({
			err: 'Error Loading Audio',
		});
	}
});

module.exports = router;
