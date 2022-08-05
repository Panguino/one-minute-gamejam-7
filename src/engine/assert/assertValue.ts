import { assert } from "./assert";
import { AssertionMessage } from "./type/AssertionMessage";
import { isValue } from "./isValue";

export function assertValue<T>(
  maybe: T,
  message: AssertionMessage = "Assertion failed: Required value not defined"
): T {
  assert(isValue(maybe), message);
  return maybe;
}
