/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "storage.cloud.google.com",
			},
		],
	},
};

module.exports = nextConfig;
