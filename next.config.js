/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  typescript: {
    tsconfigPath: './tsconfig.json'
  }
}

module.exports = nextConfig
