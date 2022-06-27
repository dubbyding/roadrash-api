const { folderContents } = require('./utils');
const { join } = require('path');

const getAssetsList = (path) => {
	const folderPath = join(__dirname, path);
	return folderContents(folderPath);
};

module.exports = getAssetsList;
