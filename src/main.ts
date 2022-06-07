import { createSSRApp } from 'vue';
import App from './App.vue';
import './styles/common.scss';
import './styles/reset.scss';
export const createApp = () => {
  const app = createSSRApp(App);
  return { app };
};
