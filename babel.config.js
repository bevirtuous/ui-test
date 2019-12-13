module.exports = (api) => {
  api.cache(true);

  return {
    compact: true,
    presets: [
      ['@babel/preset-env', {
        modules: false,
      }],
      '@babel/preset-react',
    ],
    plugins: [
      'react-hot-loader/babel',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
    ],
  };
};
