var gulp = require('gulp');
var browserSync = require('browser-sync');
var modRewrite = require('connect-modrewrite');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function(done) {
  browserSync({
    online: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: [
        function(req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            next();
        },
        modRewrite([
            '!\\.\\w+$ /index.html [L]'
            ])
      ]
    }
  }, done);
});
