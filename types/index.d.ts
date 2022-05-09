// vue
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare interface ImportMetaEnv extends ViteEnv {
  __: unknown;
}

declare interface ViteEnv {
  readonly VITE_NODE_ENV: string;
  readonly VITE_CDN_URL: string;
  readonly VITE_PUBLIC_PATH: string;
  readonly VITE_USE_HTTPS: boolean;
  readonly VITE_PORT: number;
}
