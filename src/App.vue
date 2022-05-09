<template>
  <div :class="cssModule.siteWrap">
    {{ Package.name }}
    <User :username="'vite framework'" />

    <img src="@assets/logo.png" alt="" />

    <img
      :src="getImageCDNURL('/large/005HV6Avgy1h0ywe6uarnj312q0vqtb5.jpg')"
      width="200"
    />
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { User } from './components/User';
// cssModule
import cssModule from './styles/module/index.module.scss';
// json
import Package from '~/package.json';
// alias
import { getImageCDNURL, throttle } from '@utils';
// worker 计算斐波那契数列
import AnalysisWorker from './workers/analysis.worker.ts?worker';

const worker = new AnalysisWorker();
worker.addEventListener('message', ({ data }) => {
  console.log('webWorker: ', data);
});

// 节流
let num = 0;
const fn = throttle(() => console.log(num++), 2000);
const timer = setInterval(() => {
  if (num > 5) clearInterval(timer);
  fn();
}, 100);

// import config
console.log('vite env custom config: ', typeof import.meta.env.VITE_USE_HTTPS);

// global variable
const { name } = __APP_INFO__;
console.log('global variable: ', name);
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $theme-color;
}
</style>
