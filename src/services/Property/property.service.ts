import { type InputMediaPhoto } from "grammy/types";
import { InputMediaBuilder } from "grammy";
import type { PropertyFromDb } from "../../types/database.js";
import {
	fullPropertyControlKeyboard,
	nextPropertyControlKeyboard,
	previousPropertyControlKeyboard
} from "../../menus/propertyMenu.js";
import type { CustomContext } from "../../types/context.js";

export const generatePropertyDescription = (
	property: PropertyFromDb
): string => {
	const {
		name,
		development,
		availability,
		price,
		plotMetersSquared,
		builtMetersSquared
	} = property;

	// Property description uses Telegram's Markdown V2
	const propertyDescription = `*🏠 ${development}: ${name}*\n\nPlot Size: ${plotMetersSquared}m2 \nBuilt Meters: ${builtMetersSquared}m2\nPrice: ${price
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}€${
		availability ? "" : "Reserved"
	}\n`;

	return propertyDescription;
};

export const generatePropertyPhotoAlbum = (
	albumUrls: string[]
): InputMediaPhoto[] => {
	const photoAlbum: InputMediaPhoto[] = [];

	for (const photoUrl of albumUrls) {
		const photo = InputMediaBuilder.photo(photoUrl);
		photoAlbum.push(photo);
	}

	return photoAlbum;
};

export const displayProperty = async (
	ctx: CustomContext,
	properties: PropertyFromDb[],
	currentPropertyIndex: number
) => {
	const totalProperties = properties.length;
	const currentProperty = properties[currentPropertyIndex];
	const { videoFileId, albumUrls } = currentProperty;
	const currentPropertyId = currentProperty._id.toString();

	let controlKeyboard;
	if (currentPropertyIndex == 0 && totalProperties > 1) {
		controlKeyboard = nextPropertyControlKeyboard(currentPropertyId);
	} else if (currentPropertyIndex + 1 < totalProperties) {
		controlKeyboard = fullPropertyControlKeyboard(currentPropertyId);
	} else {
		controlKeyboard = previousPropertyControlKeyboard(currentPropertyId);
	}

	const propertyDescription = generatePropertyDescription(
		currentProperty as PropertyFromDb
	);
	const propertyPhotoAlbum = generatePropertyPhotoAlbum(albumUrls);

	await ctx.reply(`Property ${currentPropertyIndex + 1}/${totalProperties}`);
	await ctx.reply(propertyDescription, { parse_mode: "MarkdownV2" });
	await ctx.replyWithVideo(videoFileId);
	await ctx.replyWithMediaGroup(propertyPhotoAlbum);
	await ctx.reply(`Property ${currentPropertyIndex + 1}/${totalProperties}`, {
		reply_markup: controlKeyboard ?? undefined
	});
};
