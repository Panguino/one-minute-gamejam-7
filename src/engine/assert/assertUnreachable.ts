import { AssertionMessage } from "./type/AssertionMessage";
import { toMessage } from "./toMessage";

export function assertUnreachable(
  value: never,
  message: AssertionMessage = "Assertion failed: Reached what should be an unreachable section of code"
): never {
  throw new Error(toMessage(message));
}
