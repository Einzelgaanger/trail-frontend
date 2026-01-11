/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    'antd',
    'rc-util',
    'rc-pagination',
    'rc-picker',
    'rc-table',
    'rc-tree',
    'rc-tree-select',
    'rc-select',
    'rc-dropdown',
    'rc-menu',
    'rc-drawer',
    'rc-dialog',
    'rc-form',
    'rc-field-form',
    '@ant-design/icons',
    '@ant-design/icons-svg',
  ],
  // Optimize Ant Design icons imports
  modularizeImports: {
    '@ant-design/icons': {
      transform: '@ant-design/icons/{{member}}',
    },
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['antd', 'react-google-charts'],
  },
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
