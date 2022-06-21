/**
 * It takes an array of objects, and returns a promise that resolves to the same array of objects, but
 * with a new property added to each object, called "highScore", which is the highest score of all the
 * objects in the array.
 * @param object - an array of objects
 * @returns a promise.
 */
const getHighScore = (object) => {
	return new Promise((resolve, reject) => {
		/* Sorting the array of objects by the score property. */
		let result = object.sort((a, b) => {
			return parseInt(a.score) - parseInt(b.score);
		});
		resolve(result);
	});
};

module.exports = getHighScore;
