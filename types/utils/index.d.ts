/**
 * 节流函数
 */
declare interface IThrottle {
  (cb: (...args: any[]) => any, wait?: number): () => void;
}

/**
 * 斐波那契数列
 */
declare interface IFibonacci {
  (n: number): number;
}
