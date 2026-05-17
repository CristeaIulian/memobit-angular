module.exports = {
  preset: "jest-preset-angular",
  roots: ["<rootDir>/projects/memobit/tests"],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  transform: {
    "^.+\\.(ts|js|html)$": "jest-preset-angular",
  },
  moduleFileExtensions: ["ts", "html", "js", "json"],
  moduleDirectories: ["node_modules", "src"],
  modulePaths: ["<rootDir>"],
};
