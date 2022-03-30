/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  babel: {
    plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]],
  },
}

module.exports = nextConfig
