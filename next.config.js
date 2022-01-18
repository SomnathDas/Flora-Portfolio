/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["uploads-ssl.webflow.com", "ssr.resume.tools"] },
};

module.exports = nextConfig;
