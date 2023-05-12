/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		// mdxRs: true,
		typedRoutes: true,
	},
	images: {
		domains: [
			"avatars.githubusercontent.com",
			"tailwindui.com",
		],
		disableStaticImages: false,
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

export default nextConfig;
