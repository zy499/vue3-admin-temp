import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import viteSvgIcons from 'vite-plugin-svg-icons';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression';
import WindiCSS from 'vite-plugin-windicss';
import { configStyleImportPlugin } from '/@/libs/utils/vite/styleImport';
import { createProxy } from './src/libs/utils/vite/proxy';
import { wrapperEnv } from './src/libs/utils/vite/utils';
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
export default ({ command, mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const isBuild = command === 'build';
  const { VITE_PORT, VITE_PROXY } = viteEnv;
  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      WindiCSS(),
      viteCompression(),
      configStyleImportPlugin(isBuild),
      viteSvgIcons({
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve('src/styles/var/index.less')}";`,
          },
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: `${pathResolve('src')}/`,
        },
        {
          find: /\/#\//,
          replacement: `${pathResolve('types')}/`,
        },
      ],
    },
    base: loadEnv(mode, process.cwd()).VITE_PUBLIC_PATH,
    server: {
      host: true,
      port: VITE_PORT,
      open: true,
      proxy: createProxy(VITE_PROXY),
    },
  });
};
