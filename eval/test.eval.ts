import { evalite } from "evalite";
import { createScorer } from "evalite";

const score = createScorer<string>({
  name: "Contains Paris",
  description: "Checks if the output contains the word 'Paris'.",
  scorer: ({ output }) => {
    return output.includes("Paris") ? 1 : 0;
  },
});

evalite("My Eval", {
  // A function that returns an array of test data
  // - TODO: Replace with your test data
  data: async () => {
    return [{ input: "Hello", expected: "Hello World!" }];
  },
  // The task to perform
  // - TODO: Replace with your LLM call
  task: async (input) => {
    return input + " Paris!";
  },
  // The scoring methods for the eval
  scorers: [score],
});
