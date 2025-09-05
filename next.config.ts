import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  webpack: (config, { isServer }) => {
    // Exclude frontend and studio directories from the main build
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/frontend/**', '**/studio/**', '**/node_modules/**']
    };
    return config;
  }
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});

export default withMDX(nextConfig);
