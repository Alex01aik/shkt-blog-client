/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/',
            destination: '/pages/home',
          },
          {
            source: '/:path*',
            destination: '/pages/:path*',
          },
        ];
    }
};

export default nextConfig;
