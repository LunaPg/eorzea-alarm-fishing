// jest.config.js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
   "coverageReporters": [
      "json",
      "html"
    ],
    "collectCoverage": true,
    "collectCoverageFrom": [
      "./src/**"
    ],
    "coverageThreshold": {
      "global": {
        "lines": 80
      }
    }
}