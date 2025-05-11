/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization for external domains
  images: {
    domains: ['fakestoreapi.com'],
  },
};
export default nextConfig;
