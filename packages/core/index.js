require("@tensorflow/tfjs-node");

const fs = require("node:fs");
const toxicity = require("@tensorflow-models/toxicity");

// The minimum prediction confidence.
const threshold = 0.9

console.time("toxic-comment-processing");

// Load the model. Users optionally pass in a threshold and an array of
// labels to include.
toxicity.load(threshold).then((model) => {
	const tain_data = require("./data");

	model.classify(tain_data).then((predictions) => {
		// `predictions` is an array of objects, one for each prediction head,
		// that contains the raw probabilities for each input along with the
		// final prediction in `match` (either `true` or `false`).
		// If neither prediction exceeds the threshold, `match` is `null`.
		console.dir(predictions, { depth: Infinity });
		console.timeEnd("toxic-comment-processing");

		// Write the output to a file called predictions.json
		fs.writeFile(
			"./bin/predictions.json",
			JSON.stringify(predictions),
			"utf8",
			() => {}
		);
		console.log("./bin/predictions.json created!");
	});
});