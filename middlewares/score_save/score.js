const express = require('express');
const path = require('path');

const getScores = require('./../../handlers/score_save/getScores');
const saveScore = require('./../../handlers/score_save/saveScores');
const getHighScore = require('./../../handlers/score_save/getHighScore');

const router = express.Router();

router.get('/getScore', async (request, response) => {
	const filePath = path.join(__dirname, './../../static/db');
	const fileName = 'highScore.json';
	try {
		let val = await getScores(filePath, fileName);

		val = JSON.parse(val);

		response.status(200).send(val);
	} catch (e) {
		response.status(404).send({
			err: e,
		});
	}
});

router.post('/setScore', async (request, response) => {
	let val = request.body.score;
	let name = request.body.name;

	const filePath = path.join(__dirname, './../../static/db');
	const fileName = 'highScore.json';

	try {
		await saveScore(filePath, fileName, val, name);

		response.status(200).send({
			detail: 'Score has been added to the database',
		});
	} catch (e) {
		response.status(404).send({
			err: 'Error Saving score',
		});
	}
});

router.get('/getHighScore', async (request, response) => {
	const filePath = path.join(__dirname, './../../static/db');
	const fileName = 'highScore.json';
	try {
		let val = await getScores(filePath, fileName);

		val = JSON.parse(val);

		let highScore = await getHighScore(val);

		response.status(200).send(highScore);
	} catch {
		response.status(404).send({
			err: 'Error getting High Score',
		});
	}
});

module.exports = router;
