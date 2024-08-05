/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

require('dotenv').config();

module.exports = {
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  },
};

