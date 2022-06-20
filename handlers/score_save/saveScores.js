const { promises: fs } = require('fs');
const path = require('path');

const getScores = require('./getScores');

const saveScore = async (pathOfFile, fileName, score, name) => {
	let file = path.join(pathOfFile, fileName);

	let temp = {};
	temp['name'] = name;
	temp['score'] = score;

	try {
		let currentFile = await getScores(pathOfFile, fileName);
		currentFile = JSON.parse(currentFile);
		latestIndex = parseInt(
			Object.keys(currentFile)[Object.keys(currentFile).length - 1]
		);

		latestIndex++;

		currentFile.push(temp);

		return fs.writeFile(file, JSON.stringify(currentFile));
	} catch {
		return fs.writeFile(file, JSON.stringify([temp]));
	}
};

module.exports = saveScore;
