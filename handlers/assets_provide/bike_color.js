const path = require('path');

const { folderContents } = require('./utils');

const bikeAvailabilityCheck = (color) => {
	return new Promise(async (resolve, reject) => {
		try {
			const bikeFolderPath = path.join(
				__dirname,
				'../../static/images/bike-assets'
			);

			let contents = await folderContents(bikeFolderPath);

			contents.forEach((i) => {
				if (i.split('.')[0] == color) {
					resolve(true);
				}
			});
			reject(false);
		} catch (e) {
			reject(false);
		}
	});
};

module.exports = bikeAvailabilityCheck;
