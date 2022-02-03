module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^.+\\.svg$': 'jest-svg-transformer',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
