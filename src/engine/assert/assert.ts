import { AssertionMessage } from "./type/AssertionMessage";
import { toMessage } from "./toMessage";

export function assert(
  value: boolean,
  message: AssertionMessage = "Assertion failed"
) {
  if (!value) {
    throw new Error(toMessage(message));
  }
}
