import nextMDX from "@next/mdx";

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		format: "mdx",
		remarkPlugins: [],
		rehypePlugins: [],
		// providerImportSource: "@mdx-js/react",
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
		typedRoutes: true,
	},
	images: {
		domains: [
			"avatars.githubusercontent.com",
			"tailwindui.com",
			"images.unsplash.com",
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

export default withMDX(nextConfig);
