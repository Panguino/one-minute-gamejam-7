import { AssertionMessage } from "./type/AssertionMessage";


export function toMessage(message: AssertionMessage): string {
  if (typeof message === "string") {
    return message;
  }
  const messageMaybe = message();
  if (typeof messageMaybe === "string") {
    return messageMaybe;
  }
  console.error("ASSERTION FAIL VALUE", messageMaybe);
  return "Assertion Failed";
}
