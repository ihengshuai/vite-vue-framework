import { createApp } from './main';
import { createRouter } from './router';
import { createStore } from '@/store';
import './styles/common.scss';
import './styles/reset.scss';

const router = createRouter();
const pinia = createStore();

const { app } = createApp();

app.use(router);
app.use(pinia);

if (window.__INITIAL_STATE__) {
  pinia.state.value = JSON.parse(window.__INITIAL_STATE__);
}

router.isReady().then(() => {
  app.mount('#app', true);
});
