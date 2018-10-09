// jest.config.js
module.exports = {
    roots: ['<rootDir>/src'],
    setupTestFrameworkScriptFile: '<rootDir>/enzyme.config.js',
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    verbose: true
};
