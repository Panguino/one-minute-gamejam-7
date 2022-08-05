import { assert } from "./assert";
import { AssertionMessage } from "./type/AssertionMessage";
import { assertEqualElements } from "./assertEqualElements";

export const assertNotEqual = <T>(
  a: T,
  b: T,
  message: AssertionMessage = () => {
    console.error(a, b);
    return `Assertion failed: ${JSON.stringify(a)} is equal to ${JSON.stringify(
      b
    )}`;
  }
) => {
  // if (Array.isArray(a) && Array.isArray(b)) {
  //   return assertEqualElements(a, b, message);
  // }
  return assert(a !== b, message);
};
