import { InlineKeyboard } from "grammy";

const salisolParkWebsiteUrl = "https://salisolpark.com/";

export const startMenu = new InlineKeyboard()
	.text("🏠 View Developments", "view-developments")
	.row()
	.text("📞 Contact sales", "contact-sales")
	.row()
	.url("🌐 Visit website", salisolParkWebsiteUrl);
