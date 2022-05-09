/**
 * 节流函数
 * @param cb 回调函数
 * @param wait 执行间隔时间
 * @returns 包装后的回调函数
 */
export const throttle: IThrottle = (cb, wait = 200) => {
  let timer: any;
  return (...args: any) => {
    if (timer) return;
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      cb(...args);
    }, wait);
  };
};

/**
 * 斐波那契数列
 * @param n 第几个
 * @returns 结果
 */
export const fibonacci: IFibonacci = (n) => {
  let pre = 0;
  let next = 1;
  if (n === 0) return pre;
  if (n === next) return next;
  let result = 0;
  while (n > 0) {
    result = pre + next;
    pre = next;
    next = result;
    n--;
  }
  return result;
};
