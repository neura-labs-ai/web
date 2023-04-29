// Default constants for the application and various API models data.
export default {
	v1: {
		// The minimum prediction confidence.
		threshold: 0.9,
		binDir: "./bin",
		labels: [
			"toxicity",
			"threat",
			"sexual_explicit",
			"obscene",
			"insult",
			"identity_attack",
		],
	},
};