import { InlineKeyboard } from "grammy";

export const ourDevelopmentsMenu = new InlineKeyboard()
	.text(
		"🏠 SaliSol Resort - Guardamar, Spain",
		"view-development:salisol-resort"
	)
	.row()
	.text("🏔️ SaliSol Hills - Benidorm, Spain", "view-development:salisol-hills")
	.row()
	.text("⛳ SaliSol Golf - Benidorm, Spain", "view-development:salisol-golf")
	.row()
	.text("🔙 Back", "start");
