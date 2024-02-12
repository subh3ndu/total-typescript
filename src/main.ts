const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};

// type testingFrameworks = unknown;
type TestingFrameworks = keyof typeof testingFrameworks;
