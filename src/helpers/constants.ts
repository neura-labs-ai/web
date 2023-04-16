/** The name of the database to connect to for mongodb */
export const DATABASE_NAME = "code-library-engine";

/** Collections used by the mongodb driver */
export const COLLECTIONS = {
	USERS: "users",
};

/** Common static site data */
export const SITE = {
	NAME: "Code Library",
	META: {
		TITLE:
			process.env.NODE_ENV === "development"
				? "Code Library (dev build)"
				: "Code Library",
		DESCRIPTION: "Search for developers, by developers.",
		DETAILED_DESCRIPTION:
			"Code Library aim's to provide developers of any level the research and tools required for proficiency in various programming languages and frameworks.",
	},
	SOCIALS: {
		GITHUB: "https://github.com/ThatGuyJamal/The-Code-Library",
		TWITTER: "",
		DISCORD: "",
		EMAIL: "",
	},
};

export const HOST_URL =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "http://the-code-library-preview.vercel.app";

export const LOCAL_STORAGE_KEYS = {
	TELEMETRY: "telemetry",
};

export const ROOT_SUB_PAGES = {
	ABOUT: "/about",
	CONTACT: "/contact",
	PRIVACY: "/privacy",
	TERMS: "/terms",
	CONTRIBUTE: "/contributing",
	LOGIN: "/auth/login",
};

export const LOGO_URL =
	"https://tailwindui.com/img/logos/mark.svg?color=teal&shade=400";

/** Links used for the navbar */
export const NAV_LINKS = [
	{ name: "Documentation", href: "#" },
	{ name: "Research Goals", href: "#" },
	{ name: "Community", href: "#" },
	{ name: "Company", href: "#" },
];

const gh_url = "https://github.com";
export const TEAM_MEMBERS = [
	{
		name: "ThatGuyJamal",
		role: "CEO",
		imageUrl: "https://avatars.githubusercontent.com/u/43446907?v=4",
		github: `${gh_url}/ThatGuyJamal`,
	},
	{
		name: "ThatGuyJamal",
		role: "CEO",
		imageUrl: "https://avatars.githubusercontent.com/u/43446907?v=4",
		github: `${gh_url}/ThatGuyJamal`,
	},
	{
		name: "ThatGuyJamal",
		role: "CEO",
		imageUrl: "https://avatars.githubusercontent.com/u/43446907?v=4",
		github: `${gh_url}/ThatGuyJamal`,
	},
	{
		name: "ThatGuyJamal",
		role: "CEO",
		imageUrl: "https://avatars.githubusercontent.com/u/43446907?v=4",
		github: `${gh_url}/ThatGuyJamal`,
	},
	{
		name: "ThatGuyJamal",
		role: "CEO",
		imageUrl: "https://avatars.githubusercontent.com/u/43446907?v=4",
		github: `${gh_url}/ThatGuyJamal`,
	},
	{
		name: "ThatGuyJamal",
		role: "CEO",
		imageUrl: "https://avatars.githubusercontent.com/u/43446907?v=4",
		github: `${gh_url}/ThatGuyJamal`,
	},
];
