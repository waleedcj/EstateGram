import type { Collection, ObjectId } from "mongodb";

export interface User {
	userId: number;
	name: string;
}

export interface Property {
	_id: string;
	collection: "SaliSol Hills" | "SaliSol Resort" | "SaliSol Golf";
	name: string;
	price: number;
	availability: boolean;
	videoFileId: string;
	thumbnailUrl: string;
	albumUrls: string[];
	builtMetersSquared: number;
	plotMetersSquared: number;
	dropboxUrl: string;
	telegramContactUrl: string;
	websiteUrl: string;
}

export interface DevelopmentFromDb {
	_id: ObjectId;
	name: string;
	dropboxUrl: string;
	googleMapsUrl: string;
	presentationVideoFileId?: string;
	phoneNumber: string;
}

export type DevelopmentType =
	| "SaliSol Hills"
	| "SaliSol Resort"
	| "SaliSol Golf";
export interface PropertyFromDb {
	_id: ObjectId;
	development: DevelopmentType;
	name: string;
	price: number;
	availability: boolean;
	videoFileId: string;
	thumbnailUrl: string;
	albumUrls: string[];
	builtMetersSquared: number;
	plotMetersSquared: number;
	dropboxUrl: string;
	telegramContactUrl: string;
	websiteUrl: string;
}

export interface Chat {
	chatId: number;
	title: string;
}

export interface Database {
	user: Collection<User>;
	chat: Collection<Chat>;
	property: Collection<PropertyFromDb>;
	development: Collection<DevelopmentFromDb>;
}
