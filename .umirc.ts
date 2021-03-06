import { defineConfig } from 'dumi';

import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
const chainWebpack = (config, { webpack }) => {
  config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
    {
      languages: ['yaml', 'javascript', 'typescript'],
    },
  ]);

  // 如果带以 !raw-loader! 开头的文件，则使用 raw-loader 来引入
  config.module
    .rule('raw')
    .test(/^\!raw-loader\!/)
    .use('raw')
    .loader('raw-loader');
};

export default defineConfig({
  title: 'ts-algorithms',
  favicon: '/images/logo.png',
  logo: '/images/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/ts-algorithms/',
  publicPath: '/ts-algorithms/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  hash: true,
  chainWebpack,
  navs: [
    null,
    {
      title: 'github',
      path: 'https://github.com/aishen1874/ts-algorithms',
    },
  ],
});
