import { Composer } from "grammy";
import type { CustomContext } from "../types/context.js";

export const stopController = new Composer<CustomContext>();
stopController.command("stop", async ctx => {
	await ctx.text("stop", {
		name: ctx.config.user.name,
		chatName: ctx.config.chat?.title ?? "PM"
	});
});
