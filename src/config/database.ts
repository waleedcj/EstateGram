import { MongoClient } from "mongodb";
import type { DevelopmentFromDb } from "../types/database.js";
import {
	type Chat,
	type Database,
	type PropertyFromDb,
	type User
} from "../types/database.js";

export async function connectToDb() {
	const client = new MongoClient(process.env.DB_CONNECTION_STRING);
	await client.connect();
	const mongoDb = client.db();
	const user = mongoDb.collection<User>("user");
	const chat = mongoDb.collection<Chat>("chat");
	const property = mongoDb.collection<PropertyFromDb>("properties");
	const development = mongoDb.collection<DevelopmentFromDb>("developments");
	const database: Database = { user, chat, property, development };
	return database;
}
