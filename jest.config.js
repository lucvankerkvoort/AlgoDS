/** Runs only the practice suite under src/ -- your stubs, not the reference solutions. */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/*.test.ts"],
};
