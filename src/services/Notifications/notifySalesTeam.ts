import { ObjectId } from "mongodb";
import type { CustomContext } from "../../types/context";
import type { PropertyFromDb } from "../../types/database";

export const notifySalesTeam = async (
	ctx: CustomContext,
	propertyId?: string
) => {
	const adminGroupId = process.env.ADMIN_GROUP_ID;
	const userId = ctx.config.user.userId;
	const userName = ctx.config.user.name;

	const propertyMongoId = new ObjectId(propertyId);
	const propertyOfInterest = (await ctx.db.property.findOne({
		_id: propertyMongoId
	})) as PropertyFromDb;

	const userClickable = `[${userName}](tg://user?id=${userId})`;

	const formattedNotificationMessage = `A new client is requesting information:\nName: ${userName}\nUser: @${userClickable}\n${
		propertyOfInterest
			? `Interested in ${propertyOfInterest.development} ${propertyOfInterest.name}`
			: ""
	}`;

	await ctx.api.sendMessage(adminGroupId, formattedNotificationMessage, {
		parse_mode: "MarkdownV2"
	});
};
