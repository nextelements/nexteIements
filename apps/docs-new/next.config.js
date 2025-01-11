const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/introduction',
        permanent: true, // true für eine 301 (permanente) Weiterleitung
      },
    ];
  },
});