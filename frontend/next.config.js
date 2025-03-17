const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  compiler: { styledComponents: true },
  reactStrictMode: true,

  // the below config for why did you render was retrieved from https://stackoverflow.com/a/72400455/13021511
  webpack(config, { dev, isServer }) {
    // why did you render
    if (dev && !isServer) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const wdrPath = path.resolve(__dirname, "./scripts/whyDidYouRender.ts");
        const entries = await originalEntry();
        if (entries["main.js"] && !entries["main.js"].includes(wdrPath)) {
          entries["main.js"].unshift(wdrPath);
        }
        return entries;
      };
    }

    return config;
  },
};

module.exports = nextConfig;
