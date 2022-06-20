const { folderContents } = require('./utils');
const { join } = require('path');

const getCarsList = () => {
	const carFolderPath = join(__dirname, '../../static/images/car-assets');
	return folderContents(carFolderPath);
};

module.exports = getCarsList;
