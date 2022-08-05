import { isNotValue } from "./isNotValue";
import { toMessage } from "./toMessage";
import { AssertionMessage } from "./type/AssertionMessage";

export function assertExists<T>(
  value: T,
  // message: AssertionMessage
  message: AssertionMessage = "Assertion failed: Required value does not exist"
) {
  if (isNotValue(value)) {
    throw new Error(toMessage(message));
  }
}
