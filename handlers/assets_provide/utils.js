const { promises: fs } = require('fs');

/**
 * This function returns a promise that resolves to an array of strings, each string being the name of
 * a file or folder in the folder at the given path.
 * @param path - The path to the folder you want to read.
 * @returns An array of the contents of the folder.
 */
const folderContents = (path) => {
	return fs.readdir(path);
};

module.exports = { folderContents };
