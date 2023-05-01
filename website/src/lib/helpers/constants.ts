/** Common static site data */
export const SITE = {
	NAME: "The Code Library",
	META: {
		TITLE:
			process.env.NODE_ENV === "development"
				? "Code Library (dev build)"
				: "Code Library",
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

export const HOST_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "http://the-code-library-preview.vercel.app";

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

export const LOGO_URL =
  "https://tailwindui.com/img/logos/mark.svg?color=teal&shade=400";

export const APP_ICON =
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
