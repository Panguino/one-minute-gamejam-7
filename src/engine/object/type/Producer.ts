
export type Producer<T> = () => T;

export type ValueProducer<T> = T | Producer<T>;

export const isProducer = <T>(
  valueProducer: ValueProducer<T>
): valueProducer is Producer<T> => {
  return typeof valueProducer === "function";
};
