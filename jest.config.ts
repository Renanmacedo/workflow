import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'jsdom',
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],

  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
export default config;