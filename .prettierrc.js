module.exports = {
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 160,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: 'always',
  overrides: [
    {
      files: '*.component.html',
      options: {
        parser: 'angular'
      }
    },
    {
      files: '*.html',
      options: {
        parser: 'html'
      }
    }
  ]
};
