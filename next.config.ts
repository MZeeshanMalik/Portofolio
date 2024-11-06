import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    DATABASE: process.env.DATABASEURL, // pulls from .env file
  },
};

export default nextConfig;
