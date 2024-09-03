/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

dotenvExpand.expand(dotenv.config())

console.log('AUTH_URL：', process.env.AUTH_URL)

const nextConfig = {
  experimental: {
    // 实现部分预呈现
    ppr: 'incremental',
  },
};

export default nextConfig;
