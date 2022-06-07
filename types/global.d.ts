declare global {
  const __APP_INFO__: {
    name?: string;
  };
  const __IS_SSR__: string | null;

  interface Window {
    __INITIAL_STATE__: string;
  }

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
    }
  }
}

export {};
