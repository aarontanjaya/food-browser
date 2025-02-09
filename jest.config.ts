import { Config } from 'jest';

process.env.TZ = 'UTC';

const config: Config = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  displayName: 'food-browser',
  moduleFileExtensions: ['tsx', 'ts', 'html', 'jsx', 'js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/$1',
    '^@utils$': '<rootDir>/src/utils/index.ts',
    '^@ui$': '<rootDir>/src/ui/index.ts',
  },
  transform: {
    '^.+\\.(ts|js|tsx|jsx)$': [
      '@swc/jest',
      {
        jsc: {
          transform: { react: { runtime: 'automatic' } },
        },
      },
    ],
  },
};

export default config;
