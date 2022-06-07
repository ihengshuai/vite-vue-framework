/**
 * 节流函数
 */
declare interface IThrottle {
  (cb: (...args: any[]) => any, wait?: number): () => void;
}

/**
 * 防抖函数
 */
declare interface IDebounce {
  (cb: (...args: any[]) => any, wait?: number): () => void;
}

/**
 * 斐波那契数列
 */
declare interface IFibonacci {
  (n: number): number;
}

/**
 * compose
 */
type ParseComposeRes<T extends Function[]> = T extends [...infer R, infer Last]
  ? Last
  : void;
declare interface IComposeHoc {
  <T extends Function[]>(...fns: T): ParseComposeRes<T>;
}
