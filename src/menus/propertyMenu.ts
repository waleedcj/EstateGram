import { InlineKeyboard } from "grammy";

export const fullPropertyControlKeyboard = (
	propertyId: string
): InlineKeyboard => {
	const keyboard = new InlineKeyboard()
		.text("« Previous Property", "previous-property")
		.text("Next Property » ", "next-property")
		.row()
		.text("📞 Contact me about this property", `contact_property_${propertyId}`)
		.row()
		.text("🔙 Back", "view-developments");

	return keyboard;
};

export const nextPropertyControlKeyboard = (
	propertyId: string
): InlineKeyboard => {
	const keyboard = new InlineKeyboard()
		.text("Next Property » ", "next-property")
		.row()
		.text("📞 Contact me about this property", `contact_property_${propertyId}`)
		.row()
		.text("🔙 Back", "view-developments");
	return keyboard;
};

export const previousPropertyControlKeyboard = (
	propertyId: string
): InlineKeyboard => {
	const keyboard = new InlineKeyboard()
		.text("« Previous Property", "previous-property")
		.row()
		.text("📞 Contact me about this property", `contact_property_${propertyId}`)
		.row()
		.text("🔙 Back", "view-developments");
	return keyboard;
};
