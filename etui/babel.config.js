module.exports = function(api) {
  api.cache(true);
  return  {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      '@babel/plugin-transform-class-static-block',
      'react-native-reanimated/plugin',
      'transform-inline-environment-variables',
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.tsx', '.jsx', '.js', '.ts'],

          alias: {
            '@components': ['./components'],
            '@services': ['./services'],
            '@mocks': ['./mocks'],
          },
        },
      ],
    ],
  };
};
