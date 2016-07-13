module.exports = require('./Enchiridion/index.js');
module.exports.makeError = function (code, reason) {
	let msg = `${code}#${reason}`;
	return (new Error(msg));
}