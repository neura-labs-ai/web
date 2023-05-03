/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		mdxRs: true,
		typedRoutes: true,
	},
	images: {
		domains: [
			"avatars.githubusercontent.com",
			"tailwindui.com",
			"images.unsplash.com",
		],
		dangerouslyAllowSVG: true,
		contentDispositionType: "attachment",
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	webpack(config) {
		config.experiments = { ...config.experiments, topLevelAwait: true };
		return config;
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
};

module.exports = {
	...nextConfig,
	env: {
		NEURALABS_API_URL: process.env.NEURALABS_API_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		DATABASE_URL: process.env.DATABASE_URL,
		GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
		GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
		GITHUB_CALLBACK_URL: process.env.GITHUB_CALLBACK_URL,
	},
};
