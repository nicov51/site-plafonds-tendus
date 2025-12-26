import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'standalone', //  pour Docker
    compress: true,
    poweredByHeader: false,
};

export default nextConfig;

