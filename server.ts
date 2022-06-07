const fs = require('fs');
const path = require('path');

const Koa = require('koa');
const koaConnect = require('koa-connect');

const vite = require('vite');

(async () => {
  const app = new Koa();

  // 创建 vite 服务
  const viteServer = await vite.createServer({
    root: process.cwd(),
    logLevel: 'warn',
    server: {
      middlewareMode: 'ssr',
    },
  });

  app.use(koaConnect(viteServer.middlewares));

  app.use(async (ctx) => {
    try {
      // 1.获取index.html
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8',
      );

      // 2.应用 Vite HTML 转换。这将会注入 Vite HMR 客户端，同时也会从 Vite 插件应用 HTML 转换。
      template = await viteServer.transformIndexHtml(ctx.path, template);

      // 3.加载服务器入口。vite.ssrLoadModule 将自动转换,你的 ESM 源码使之可以在 Node.js 中运行！无需打包,并提供类似 HMR 的根据情况随时失效
      const { render } = await viteServer.ssrLoadModule('/src/entry-server.ts');

      //  4.渲染应用的 HTML。这假设 entry-server.js 导出的 `render`,函数调用了适当的 SSR 框架 API。
      const [renderedHtml, state] = await render(ctx, {});

      // 5. 替换插槽
      const html = template
        .replace('<!--ssr-outlet-->', renderedHtml)
        .replace('<!--initital-state-->', state);

      ctx.type = 'text/html';
      ctx.body = html;
    } catch (e) {
      // Vite 来修复该堆栈，这样它就可以映射回实际源码中。
      viteServer && viteServer.ssrFixStacktrace(e);
      console.log(e.stack);
      ctx.throw(500, e.stack);
    }
  });

  app.listen(8789, () => {
    console.log('server is listening in 8789');
  });
})();
