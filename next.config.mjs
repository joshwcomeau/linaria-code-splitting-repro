// next.config.js
import { withPigment } from '@pigment-css/nextjs-plugin';

/** @type {import('next-with-linaria').LinariaConfig} */
const config = {
  trailingSlash: true,

  reactStrictMode: true,

  // Allow folks to poke around in the production build.
  productionBrowserSourceMaps: false,

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  // Ensure that the content gets copied over in production.
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['./content/**/*'],
    },
    scrollRestoration: true,
  },
};

export default withPigment(config);
