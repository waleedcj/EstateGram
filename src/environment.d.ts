export declare global {
	namespace NodeJS {
		interface ProcessEnv {
			TELEGRAM_TOKEN: string;
			DB_CONNECTION_STRING: string;
			ADMIN_GROUP_ID: string;
		}
	}
}
