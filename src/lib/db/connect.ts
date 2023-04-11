import mongoose from "mongoose";

let isConnected: number = 0; // 0 = disconnected, 1 = connected

/** Connects to the mongodb database. If already connected, does nothing. */
export async function connect() {
	if (isConnected === 1) return;

	if (!process.env.MONGO_DB_CONNECTION_URL) {
		throw new Error(
			"MONGO_DB_CONNECTION_URL is not defined in the environment variables"
		);
	}
	try {
		const db = await mongoose.connect(process.env.MONGO_DB_CONNECTION_URL);

		isConnected = db.connections[0].readyState;

		console.log("DB is connected!");
	} catch (error) {
		console.log("Something went wrong");
	}
}

/** Gets the mongodb client from the mongoose connection */
export async function getClient() {
	if (isConnected === 0) {
		await connect();
		
	}

	return mongoose.connection.getClient();
}

export default connect;
