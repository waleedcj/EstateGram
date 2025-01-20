import { Composer } from "grammy";
import type { CustomContext } from "../types/context.js";
import { startMenu } from "../menus/startMenu.js";

export const startController = new Composer<CustomContext>();
startController.command("start", async ctx => {
	const salisolLogoUrl =
		"https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYSo6VRezOEbJpP0wzkLbT9JQ_f_HbNJw_MgzN45az99ZU5qvOe3Ad5N7qWGlHg_5iIUrRO-2sb82LOgcd-cOuBt8vNLSg=w2560-h1204";
	await ctx.replyWithPhoto(salisolLogoUrl);
	await ctx.reply(
		`Hello ${ctx.config.user.name}, welcome to SaliSol☀️🏠 - 30 years developing properties on Spain's Costa Blanca.\nHow can we help you?`,
		{ reply_markup: startMenu }
	);
});

startController.callbackQuery("start", async ctx => {
	ctx.answerCallbackQuery();
	const salisolLogoUrl =
		"https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYSo6VRezOEbJpP0wzkLbT9JQ_f_HbNJw_MgzN45az99ZU5qvOe3Ad5N7qWGlHg_5iIUrRO-2sb82LOgcd-cOuBt8vNLSg=w2560-h1204";
	await ctx.replyWithPhoto(salisolLogoUrl);
	await ctx.reply(
		`Hello ${ctx.config.user.name}, welcome to SaliSol☀️🏠 - 30 years developing properties on Spain's Costa Blanca.\nHow can we help you?`,
		{ reply_markup: startMenu }
	);
});
