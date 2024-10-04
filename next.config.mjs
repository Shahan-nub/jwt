/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            // hostname: 'jwst-api-cdn.nyc3.cdn.digitaloceanspaces.com',
            hostname: '**'
          },
        ],
      },
};

export default nextConfig;
