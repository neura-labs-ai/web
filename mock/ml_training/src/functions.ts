import fs from "node:fs";
import { Predictions } from "types.js";
import constants from "./constants.js";

const binDir: string = constants.v1.binDir;
const time = new Date().getTime();

export function createBin(dir?: string): void {
	fs.mkdirSync(dir ?? binDir);
}
export function BinExists(dir?: string): boolean {
	return fs.existsSync(dir ?? binDir);
}
export function ReadBin(): string[] {
	return fs.readdirSync(binDir, {
		encoding: "utf-8",
	});
}

export function WriteBin(pred: Predictions): void {
	// get the current date but freeze it so it doesn't change while we're writing
	let now = Object.freeze(new Date().getTime());

	const dir = `${binDir}/${now}`;
	if (!BinExists(dir)) createBin(dir);

	for (let p in pred) {
		fs.writeFile(
			`${binDir}/${now}/p_${pred[p].label}.json`,
			JSON.stringify(pred[p].results),
			(err) => {
				if (err) throw err;
			}
		);
	}
}
