const path = require('path');
const { promises: fs } = require('fs');

/**
 * It takes a path and a file name, and returns a promise that resolves to the contents of the file.
 * @param pathOfFile - The path of the file.
 * @param fileName - The name of the file you want to read.
 * @returns A promise.
 */
const getScores = (pathOfFile, fileName) => {
	const file = path.join(pathOfFile, fileName);

	return fs.readFile(file, { encoding: 'utf-8' });
};

module.exports = getScores;
