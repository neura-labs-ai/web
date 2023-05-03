/** Taken from Tensorflow API */
export type Predictions = {
	label: string;
	results: {
		probabilities: Float32Array;
		match: boolean;
	}[];
}[];

export type Labels =
	| "toxicity"
	| "threat"
	| "sexual_explicit"
	| "obscene"
	| "insult"
	| "identity_attack";