export const compose = <T extends Function[]>(...fns: T) =>
  fns.reduce(
    (a, b) =>
      (...args: number[]) =>
        a(b(...args)),
  );

compose(
  () => 2,
  () => 1,
)(22);
