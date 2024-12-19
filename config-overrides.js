// config-overrides.cjs
module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      stream: false,
      util: false,
      // Add other necessary fallbacks here
    };
    return config;
  },
};
