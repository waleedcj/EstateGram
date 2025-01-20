import { Composer } from "grammy";
import type { CustomContext } from "../types/context.js";
import { notifySalesTeam } from "../services/Notifications/notifySalesTeam.js";

export const contactSalesController = new Composer<CustomContext>();

contactSalesController.callbackQuery(/contact-sales/, async ctx => {
	ctx.answerCallbackQuery("");
	ctx.reply(
		"Your request has been registered - an agent will contact you shortly"
	);
	notifySalesTeam(ctx);
});

contactSalesController.callbackQuery(/^contact_property_(.+)$/, async ctx => {
	await ctx.answerCallbackQuery();
	const propertyId = ctx.match[1];
	notifySalesTeam(ctx, propertyId);
});
