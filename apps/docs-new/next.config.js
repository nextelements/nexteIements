const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: 'next-mdx-remote/loader',
          options: {
            // Hier könnten zusätzliche Plugins wie remark und rehype hinzugefügt werden
          },
        },
      ],
    });

    return config;
  },
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