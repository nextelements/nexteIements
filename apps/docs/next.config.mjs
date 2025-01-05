/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: [ 
    '@nextelements/components',
    '@nextelements/hooks',
    '@nextelements/icons',
    '@nextelements/themes',
    '@nextelements/utilities',
  ],
}

export default nextConfig;
