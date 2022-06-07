import { resolve } from 'path';
/**
 * 根路径
 */
export const rootPath = process.cwd();

/**
 * 路径解析
 * @param dir 文件路径
 * @returns 目标路径
 */
export const pathResolve = (dir = '.') => resolve(rootPath, '.', dir);

/**
 * 改造env配置
 * @param envconfig vite env
 * @returns 改造后的vite env
 */
export const decorateEnv = (envconfig: Record<string, any>): ImportMetaEnv => {
  const res: any = {};
  Object.keys(envconfig).forEach((k) => {
    const oldVal = envconfig[k];
    if (oldVal.includes('true') || oldVal.includes('false')) {
      const newVal = oldVal.includes('true') ? true : false;
      res[k] = newVal;
    }
    if (!isNaN(Number(oldVal))) {
      const newVal = Number(oldVal);
      res[k] = newVal;
    }
    process.env[k] = oldVal;
  });
  return res;
};
