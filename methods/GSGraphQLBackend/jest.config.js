'use strict'

module.exports = {
  verbose: true,
  collectCoverageFrom: ['src/tests/**'],
  coverageReporters: ['json', 'lcov', 'text-summary', 'html'],
  testURL: 'http://localhost',
  testPathIgnorePatterns: [
    '/dist/'
  ],
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}
