/** Common static site data */
export const SITE = {
	NAME: "NeuraLabs",
	META: {
		TITLE:
			process.env.NODE_ENV === "development" ? "NeuraLabs (Preview)" : "NeuraLabs",
		DESCRIPTION: "Machine Learning API's for developers",
		DETAILED_DESCRIPTION:
			"A collection of API's and tools for developers to build amazing applications using Machine Learning, Natural Language Processing, and the love for technology.",
		KEYWORDS: ["library", "code tools", "programming", "AI"],
	},
	SOCIALS: {
		GITHUB: "https://github.com/neura-labs-ai/web",
		TWITTER: "",
		DISCORD: "https://discord.gg/MSTrBrNaGn",
		EMAIL: "",
	},
};

export const EXTERNAL_API_URL =
	process.env.NODE_ENV === "development" ? "http://127.0.0.1:8080" : ""; // todo - add prod url

export const HOST_URL =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "https://neuralabs.vercel.app";

export const LOCAL_STORAGE_KEYS = {
	TELEMETRY: "telemetry-opt-in",
};

export const ROOT_SUB_PAGES = {
	DASHBOARD: "/dashboard",
	ABOUT: "/about",
	CONTACT: "/contact",
	PRIVACY: "/privacy",
	TERMS: "/terms",
	CONTRIBUTE: "/contributing",
	LOGIN: "/oauth/login",
};

export const ROOT_SUB_PAGES_WITHOUT_LEADING_SLASH = Object.values(
	ROOT_SUB_PAGES
).map((page) => page.replace("/", ""));

export const APP_ICON = "/processor.svg";

/** Links used for the navbar */
export const NAV_LINKS = [
	{ name: "Documentation", href: `${ROOT_SUB_PAGES.DASHBOARD}/docs` },
	{ name: "Research Goals", href: "/research-goals" },
	{ name: "Community", href: "/community" },
	{ name: "Company", href: "company" },
];

const gh_url = "https://github.com";
export const TEAM_MEMBERS = [
	{
		name: "ThatGuyJamal",
		role: "CEO",
		imageUrl: "https://avatars.githubusercontent.com/u/43446907?v=4",
    twitter: "https://twitter.com/thatguyjamal0",
		github: `${gh_url}/ThatGuyJamal`,
	},
	// {
	//   name: "ThatGuyJamal",
	//   role: "CEO",
	//   imageUrl: "https://avatars.githubusercontent.com/u/43446907?v=4",
	//   github: `${gh_url}/ThatGuyJamal`,
	// },
];
