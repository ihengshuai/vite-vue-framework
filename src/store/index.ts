import { createPinia } from 'pinia';
import { useCommonStore } from './common';
export const createStore = () => {
  const pinia = createPinia();
  useCommonStore(pinia);
  return pinia;
};
