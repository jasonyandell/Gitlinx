var gift = require("gift"),
	repo = gift(".");

exports.getRemotes = function(req, res) {
    console.log('Attempting to get remotes...');
	repo.remotes(function(err,remotes) {
		var results = [];
		for (var idx in remotes) {
			var remote = remotes[idx];
			results.push(remote.name);
			console.log("  found " + remote);
		}
		res.send(results);
	});
};