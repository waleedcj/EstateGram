import { InlineKeyboard } from "grammy";
import type { DevelopmentFromDb } from "../types/database";

export const developerDetailMenuCreator = (
	development: DevelopmentFromDb
): InlineKeyboard => {
	const { name, googleMapsUrl, dropboxUrl } = development;
	const developerDetailMenu = new InlineKeyboard()
		.text("View Properties", `view-properties ${name}`)
		.row()
		.text("Request a showing", `request-showing ${name}`)
		.row()
		.url("📌 View on Google Maps", googleMapsUrl)
		.row()
		.url("🖼️ View Dropbox", dropboxUrl)
		.row()
		.text("🔙 Back", "view-developments");

	return developerDetailMenu;
};
