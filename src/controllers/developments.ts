import { Composer } from "grammy";
import type { CustomContext } from "../types/context.js";
import { ourDevelopmentsMenu } from "../menus/ourDevelopmentsMenu.js";
import { developerDetailMenuCreator } from "../menus/developmentDetailMenu.js";

export const developmentsController = new Composer<CustomContext>();
developmentsController.callbackQuery("view-developments", async ctx => {
	ctx.answerCallbackQuery();
	await ctx.reply("Please select the development", {
		reply_markup: ourDevelopmentsMenu
	});
});

developmentsController.callbackQuery(
	/^view-development:\s*(.+)$/,
	async ctx => {
		const selectedDevelopment = ctx.match[1];
		let developmentName: string;
		switch (selectedDevelopment) {
			case "salisol-resort":
				developmentName = "SaliSol Resort";
				break;
			case "salisol-hills":
				developmentName = "SaliSol Hills";
				break;
			case "salisol-golf":
				developmentName = "SaliSol Golf";
				break;
			default:
				throw new Error("Development not found");
		}

		ctx.answerCallbackQuery();

		const development = await ctx.db.development.findOne({
			name: developmentName
		});
		if (!development) {
			return;
		}
		const developmentKeyboard = developerDetailMenuCreator(development);
		await ctx.reply(`*${developmentName}*`, {
			reply_markup: developmentKeyboard,
			parse_mode: "MarkdownV2"
		});
	}
);
