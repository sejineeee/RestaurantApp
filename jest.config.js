module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    'given2/setup',
    './jest.setup',
    'jest-plugin-context/setup',
  ],
};
