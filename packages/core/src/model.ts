import toxicity, { ToxicityClassifier } from "@tensorflow-models/toxicity";
import { BinExists, WriteBin, createBin } from "./functions.js";
import constants from "./constants.js";
import { Labels, Predictions } from "types.js";

class CoreModel {
	v1: V1;

	public constructor() {
		if (!BinExists()) {
			console.debug("Bin does not exist, creating one...");
			createBin();
			console.debug("Bin created!");
		}

		this.v1 = new V1();

		console.debug("CoreModel initialized!");
	}
}

class V1 {
	public constructor() {
		console.debug("V1 initialized!");
	}

	/**
	 * Loads the model.
	 * @returns
	 */
	public async load(l?: Labels[]): Promise<ToxicityClassifier> {
		return await toxicity.load(constants.v1.threshold, l ?? constants.v1.labels);
	}

	/**
	 * Computes the predictions and returns an array of the results.
	 * @returns {Predictions}
	 */
	public async classify(): Promise<Predictions> {
		const model = await this.load();

		return model.classify("i hate you");
	}

	public async exec() {
		console.time("toxic-comment-processing");

		const predictions = await this.classify();

		console.dir(predictions, { depth: Infinity });
        
		console.timeEnd("toxic-comment-processing");
        
		WriteBin(predictions);
	}
}

const coreModel = new CoreModel();

export default coreModel;
