/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    // 实现部分预呈现
    ppr: 'incremental',
  },
};

export default nextConfig;
