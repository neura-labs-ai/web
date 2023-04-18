import { JsonSearchData } from "@/lib/data/index";
import { SupportedLanguage } from "@prisma/client";

const data: JsonSearchData = [
	{
		id: "643de5c0ac8c1d3a72951dac",
		name: "React",
		lang: SupportedLanguage.JavaScript,
	},
	{
		id: "643de5c0ac8c1d3a72951db0",
		name: "Express.js",
		lang: SupportedLanguage.JavaScript,
	},
	{
		id: "643de5c1ac8c1d3a72951dbc",
		name: "React Native",
		lang: SupportedLanguage.JavaScript,
	},
	{
		id: "643de5c1ac8c1d3a72951db6",
		name: "Vue.js",
		lang: SupportedLanguage.JavaScript,
	},
];

export default data;
