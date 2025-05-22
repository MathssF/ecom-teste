/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
      config.resolve.alias['@global'] = path.resolve(__dirname, '../global');
      return config;
    },
  };
  
  module.exports = nextConfig;