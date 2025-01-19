const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  transpilePackages: [ 
    '@nextelements/components',
    '@nextelements/hooks',
    '@nextelements/icons',
    '@nextelements/themes',
    '@nextelements/utilities',
  ],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/introduction',
        permanent: false,
      },
    ];
  },
});