export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: `${app.path.build.html}` //базовая папка откуда нужно запустить файлы
    },
    notify: false,
    port: 3000,
  });
}