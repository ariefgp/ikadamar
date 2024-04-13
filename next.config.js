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
			  {
				protocol: 'https',
				hostname: 'drive.google.com',
				port: '',
				pathname: '/**',
			  },
			],
		  },
};

module.exports = nextConfig;
