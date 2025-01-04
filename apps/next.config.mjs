/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [ 
    '@nextelements/components',
    '@nextelements/icons',
    '@nextelements/themes',
    '@nextelements/utilities',
  ],
}

export default nextConfig;
