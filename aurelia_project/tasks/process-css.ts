import * as gulp from 'gulp';
import * as changedInPlace from 'gulp-changed-in-place';
import * as sourcemaps from 'gulp-sourcemaps';
import * as postcss from 'gulp-postcss';
import * as autoprefixer from 'autoprefixer';
import * as precss from 'precss';
import * as lost from 'lost';
import * as project from '../aurelia.json';
import { build } from 'aurelia-cli';

export default function processCSS() {
  let processors = [
    autoprefixer({ browsers: ['last 1 version'] }),
    precss,
    lost
  ];

  return gulp.src(project.cssProcessor.source)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(build.bundle());
};
