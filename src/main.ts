import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import './styles/common.scss';
import './styles/reset.scss';

createApp(App).use(router).use(createPinia()).mount('#app');
