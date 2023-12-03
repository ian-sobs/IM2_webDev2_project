/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: '**',
              port: '',
              pathname: '**',
              dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["www.svgrepo.com"]
          },
      ],
    },
    experimental: {
        serverActions: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["placehold.co"],
    },
}

module.exports = nextConfig
