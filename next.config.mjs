/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Deploys to Vercel (SSR/ISR) with Cloudflare in front for DNS + CDN.
  // Google Maps embed is served in an iframe; no remote next/image domains needed yet.
};

export default nextConfig;
