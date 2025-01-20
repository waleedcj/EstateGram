import { Composer } from "grammy";
import type { CustomContext } from "../types/context.js";
import type { PropertyFromDb } from "../types/database.js";
import { displayProperty } from "../services/Property/property.service.js";
import isDevelopmentType from "../helpers/isDevelopmentType.js";

export const propertiesController = new Composer<CustomContext>();

let currentPropertyIndex = 0;
let properties: PropertyFromDb[] = [];

propertiesController.callbackQuery(/^view-properties \s*(.+)$/, async ctx => {
	const chosenDevelopment = ctx.match[1];
	ctx.answerCallbackQuery();
	if (isDevelopmentType(chosenDevelopment)) {
		properties = (await ctx.db.property
			.find({ development: chosenDevelopment })
			.toArray()) as PropertyFromDb[];
		currentPropertyIndex = 0;
		await displayProperty(ctx, properties, currentPropertyIndex);
	}
});

propertiesController.callbackQuery("next-property", async ctx => {
	ctx.answerCallbackQuery();
	if (currentPropertyIndex + 1 < properties.length) {
		currentPropertyIndex++;
		await displayProperty(ctx, properties, currentPropertyIndex);
	}
});

propertiesController.callbackQuery("previous-property", async ctx => {
	ctx.answerCallbackQuery();
	if (currentPropertyIndex > 0) {
		currentPropertyIndex--;
		await displayProperty(ctx, properties, currentPropertyIndex);
	}
});
