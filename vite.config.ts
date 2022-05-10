import { type ConfigEnv, normalizePath, type UserConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import autoprefixer from 'autoprefixer';
import viteImgMin from 'vite-plugin-imagemin';
import viteEslint from 'vite-plugin-eslint';
import viteStyleLint from '@amatlash/vite-plugin-stylelint';
import { decorateEnv, pathResolve, rootPath } from './build/util';

const cssVariable = normalizePath(pathResolve('./src/styles/variable.scss'));

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const viteEnv = loadEnv(mode, rootPath);
  const { VITE_PUBLIC_PATH, VITE_PORT, VITE_USE_HTTPS } = decorateEnv(viteEnv);

  const __APP_INFO__ = {
    name: 'vite-vue-framework',
  };

  // const isBuild = command === 'build';
  return {
    root: rootPath,
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '~': pathResolve(),
        '@': pathResolve('./src'),
        '@assets': pathResolve('./src/assets'),
        '@components': pathResolve('./src/components'),
        '@hooks': pathResolve('./src/hooks'),
        '@enums': pathResolve('./src/enums'),
        '@store': pathResolve('./src/store'),
        '@router': pathResolve('./src/router'),
        '@utils': pathResolve('./src/utils'),
        '@plugins': pathResolve('./src/plugins'),
        '@api': pathResolve('./src/api'),
        '@interfaces': pathResolve('./src/interfaces'),
        '@directives': pathResolve('./src/directives'),
        '@constants': pathResolve('./src/constants'),
        '@styles': pathResolve('./src/styles'),
        '@workers': pathResolve('./src/workers'),
      },
    },
    server: {
      https: VITE_USE_HTTPS || false,
      host: true,
      port: VITE_PORT || 3000,
    },
    plugins: [
      viteEslint({
        exclude: ['node_modules'],
        emitWarning: true,
        emitError: true,
      }),
      viteStyleLint({
        exclude: ['node_modules'],
      }),
      vue(),
      vueJsx(),
      viteImgMin({
        verbose: true,
        optipng: {
          optimizationLevel: 1,
        },
        pngquant: {
          quality: [0.5, 0.4],
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${cssVariable}";`,
        },
      },
      modules: {
        localsConvention: 'camelCase',
      },
      postcss: {
        plugins: [
          autoprefixer({
            // overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"]
          }),
        ],
      },
    },
    build: {
      outDir: pathResolve('dist'),
      assetsDir: 'static',
      assetsInlineLimit: 8 * 1024,
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
  };
};
