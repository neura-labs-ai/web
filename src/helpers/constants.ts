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
		DESCRIPTION: "A search engine for programmers, by programmers.",
	},
	SOCIALS: {
		GITHUB: "",
		TWITTER: "",
		DISCORD: "",
		EMAIL: "",
	},
};

export const HOST_URL =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "https://code-library-engine-dev.vercel.app";

if (
	process.env.NODE_ENV === "production" &&
	HOST_URL === "https://code-library-engine-dev.vercel.app"
) {
	// ? throw  for now until we push stable builds to prod
	// throw new Error(
	// 	"HOST_URL is still in dev incorrect. Change it to https://code-library-engine.vercel.app"
	// );
	console.log(`[WARNING] - HOST_URL is still pointing to the dev preview build!`)
}

export const LOGO_URL =
	"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600";

/** Links used for the navbar */
export const NAV_LINKS = [
	{ name: "Product", href: "#" },
	{ name: "Features", href: "#" },
	{ name: "Marketplace", href: "#" },
	{ name: "Company", href: "#" },
];

const gith_link = "https://github.com";
export const TEAM_MEMBERS = [
	{
		name: "ThatGuyJamal",
		role: "CEO",
		imageUrl: "https://avatars.githubusercontent.com/u/43446907?v=4",
		github: `${gith_link}/ThatGuyJamal`,
	},
	{
		name: "ThatGuyJamal",
		role: "CEO",
		imageUrl: "https://avatars.githubusercontent.com/u/43446907?v=4",
		github: `${gith_link}/ThatGuyJamal`,
	},
	{
		name: "ThatGuyJamal",
		role: "CEO",
		imageUrl: "https://avatars.githubusercontent.com/u/43446907?v=4",
		github: `${gith_link}/ThatGuyJamal`,
	},
	{
		name: "ThatGuyJamal",
		role: "CEO",
		imageUrl: "https://avatars.githubusercontent.com/u/43446907?v=4",
		github: `${gith_link}/ThatGuyJamal`,
	},
	{
		name: "ThatGuyJamal",
		role: "CEO",
		imageUrl: "https://avatars.githubusercontent.com/u/43446907?v=4",
		github: `${gith_link}/ThatGuyJamal`,
	},
	{
		name: "ThatGuyJamal",
		role: "CEO",
		imageUrl: "https://avatars.githubusercontent.com/u/43446907?v=4",
		github: `${gith_link}/ThatGuyJamal`,
	},
];
