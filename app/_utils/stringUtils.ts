import { ParamProps } from "../docs/natives/[hash]/page";

// Capitalizes the first letter of a string and makes the rest lowercase
const EXEMPTWORDS: Record<string, boolean> = {
	DLC: true,
	CFX: true,
	HUD: true,
};

export const capitalizeFirstLetter = (str: string): string => {
	if (EXEMPTWORDS[str]) return str;

	if (typeof str !== "string" || str.length === 0) return str;
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Converts a snake_case string to CamelCase, ensuring the first letter is also capitalized
export const camelCaseFromSnakeCase = (str: string): string => {
	if (typeof str !== "string") return str;

	return str
		.toLowerCase()
		.split("_")
		.map((part, index) => (index === 0 ? capitalizeFirstLetter(part) : capitalizeFirstLetter(part)))
		.join("");
};

export function getParamaterString(params: ParamProps[]) {
	var paramsString = (params.length > 0 && " ") || "";
	params.map((paramData, index) => {
		paramsString += `${paramData.name}: ${paramData.type}`;
		if (index != params.length - 1) paramsString += ", ";
	});
	paramsString += (params.length > 0 && " ") || "";
	return paramsString;
}

export function replaceHashWithQuestionMark(inputString: string) {
	return inputString.replace(/#/g, "/");
}

export function containsNewline(inputString: string) {
	return inputString.includes("\n");
}
