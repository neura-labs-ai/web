/**
 * This file contains the exports for all library data from any language.
 *
 * How it works is we have library's mapped in their sub folders by ID and name. The rest of the data is in the database.
 * We use these json mappings to quickly display data to the user without fetching the db millions of times.
 */

import javascript from "./javascript";
import python from "./python";
import ruby from "./ruby";

/** The structure of our json used to store the library data. */
export type JsonData = {
	id: string;
	name: string;
}[];

// eslint-disable-next-line import/no-anonymous-default-export
export default [...javascript, ...python, ...ruby];
