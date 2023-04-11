/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	
};

module.exports = {
	...nextConfig,
	env: {
    MONGO_DB_CONNECTION_URL: process.env.MONGO_DB_CONNECTION_URL,
    NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET,
		GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    GITHUB_CALLBACK_URL: process.env.GITHUB_CALLBACK_URL,
	},
};
