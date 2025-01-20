import { Composer } from "grammy";
import type { CustomContext } from "../types/context.js";

export const fileIdController = new Composer<CustomContext>();
fileIdController.on("message", async ctx => {
	const fileId = ctx.update.message?.video?.file_id;
	if (!fileId) {
		return;
	}
	await ctx.reply(`File ID: ${fileId}`);
});
