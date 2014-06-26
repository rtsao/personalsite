var gulp = require('gulp')
  , filter = require('gulp-filter')
  , less = require('gulp-less')
  , prefix = require('gulp-autoprefixer')
  , gfm = require('gulp-front-matter')
  , gulpsmith = require('gulpsmith')
  , collections = require('metalsmith-collections')
  , markdown = require('metalsmith-markdown')
  , templates = require('metalsmith-templates')
  , permalinks = require('metalsmith-permalinks')
  , excerpts = require('metalsmith-excerpts')
  , assign = require('lodash.assign')
  , del = require('del')
  , express = require('express')

gulp.task('clean', function(cb) {
  del(['build/**/*','!build/css/**'], cb);
});

gulp.task('build', ['clean'], function() {

  gulp.src(['src/content/**/*.md'])
    .pipe(gfm()).on('data', function(file) {
      assign(file, file.frontMatter); 
      delete file.frontMatter;
    })
    .pipe(
      gulpsmith(__dirname)
        .use(collections({
          projects:{reverse: true}
        }))
        .use(markdown({
          smartypants: true
        }))
        .use(excerpts())
        .use(templates({
          engine: 'jade',
          directory: 'src/templates'
        }))
        .use(permalinks({
          pattern: ':collection/:slug'
        }))

    )
    .pipe(gulp.dest('build'));

});

gulp.task('less', function() {
  gulp.src(['src/less/style.less'])
    .pipe(less())
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('build/css'))
})

gulp.task('watch', function() {
  gulp.watch(['src/content/**/*', 'src/templates/**/*'], ['build'])
  gulp.watch('src/less/**/*.less', ['less'])
});

gulp.task('server', function() {
  var server = express();
  server.use(express.static('build'));
  server.listen(1337);
});

gulp.task('default', ['build', 'less', 'server', 'watch'])