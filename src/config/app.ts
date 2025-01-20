import { loadEnv } from "../helpers/load-env.js";
import { validateEnv } from "../helpers/validate-env.js";
import { startBot } from "./bot.js";
import { connectToDb } from "./database.js";
import debugCreator from "debug";

const debug = debugCreator("app:");

export async function startApp() {
	debug("Starting app...");
	try {
		loadEnv();
		validateEnv(["TELEGRAM_TOKEN", "DB_CONNECTION_STRING", "ADMIN_GROUP_ID"]);
	} catch (error) {
		console.error("Error occurred while loading environment:", error);
		process.exit(1);
	}

	let database;
	try {
		database = await connectToDb();
	} catch (error) {
		console.error("Error occurred while connecting to the database:", error);
		process.exit(2);
	}

	try {
		await startBot(database);
	} catch (error) {
		console.error("Error occurred while starting the bot:", error);
		process.exit(3);
	}
}
