/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "api.ts"],
  reactStrictMode: true,
  babel: {
    plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]],
  },
}

module.exports = nextConfig
