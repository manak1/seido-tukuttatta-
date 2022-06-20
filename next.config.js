/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "api.ts"],
  reactStrictMode: true,
  babel: {
    plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })
    return config
  },
}

module.exports = nextConfig
