const { folderContents } = require('./utils');
const { join } = require('path');

const getAssetsList = (path) => {
	const carFolderPath = join(__dirname, path);
	return folderContents(carFolderPath);
};

module.exports = getAssetsList;
