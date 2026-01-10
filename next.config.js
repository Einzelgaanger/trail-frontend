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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
