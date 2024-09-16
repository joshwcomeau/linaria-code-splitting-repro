// next.config.js
import withLinaria from 'next-with-linaria';

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

export default withLinaria(config);
