module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    "node_modules/(?!react-native-config|react-native)/"
  ],
  testEnvironment: 'jsdom',
};
