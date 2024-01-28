/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},

		images: {
			remotePatterns: [
			  {
				protocol: 'https',
				hostname: 'img.freepik.com',
				port: '',
				pathname: '/free-photo/**',
			  },
			],
		  },
};

module.exports = nextConfig;
