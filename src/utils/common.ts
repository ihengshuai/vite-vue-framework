/**
 * 获取图片CDN地址
 * @param url 静态资源CDN文件路径
 * @returns CDN路径
 */
export const getImageCDNURL = (url: string) => {
  return new URL(url, import.meta.env.VITE_CDN_URL).href;
};
