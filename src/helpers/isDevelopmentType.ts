import { type DevelopmentType } from "../types/database";

const isDevelopmentType = (
	development: string
): development is DevelopmentType => {
	return ["SaliSol Hills", "SaliSol Resort", "SaliSol Golf"].includes(
		development
	);
};

export default isDevelopmentType;
