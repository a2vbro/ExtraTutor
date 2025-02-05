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

          // alias: {
          //   '@services': ['./scr/services'],
          //   '@components': ['./scr/components'],
          //   '@modules': ['./scr/modules'],
          // },
        },
      ],
    ],
  };
};

// module.exports = function(api) {
//   api.cache(true);
//   return  {
//     presets: [ ['@babel/preset-configuration', {targets: {node: 'current'}}],
//       ['@babel/preset-react', {targets: {node: 'current'}}]],
//     plugins: [
//       '@babel/plugin-transform-class-static-block',
//       '@babel/plugin-syntax-dynamic-import',
//       'transform-inline-environment-variables',
//       '@babel/plugin-proposal-export-namespace-from',
//       '@babel/plugin-transform-react-jsx',
//       '@babel/plugin-syntax-jsx',
//       'react-native-reanimated/plugin',
//       [
//         'module-resolver',
//         {
//           root: ['./'],
//           extensions: ['.tsx', '.jsx', '.js', '.ts'],
//
//           alias: {
//             '@components': ['./components'],
//             '@services': ['./services'],
//             '@mocks': ['./mocks'],
//           },
//         },
//       ],
//     ],
//   };
// };

