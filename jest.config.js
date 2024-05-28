module.exports = {
  preset: 'jest-preset-angular',
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular'
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>']
};
