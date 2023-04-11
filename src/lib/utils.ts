import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Class Names function
 * @param inputs Any array of class names to merge TainWind-css classes together
 * @returns 
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function toPusherKey(key: string) {
	return key.replace(/:/g, "__");
}

export function chatHrefConstructor(id1: string, id2: string) {
	const sortedIds = [id1, id2].sort();
	return `${sortedIds[0]}--${sortedIds[1]}`;
}
