const { src, dest, series } = require("gulp");
const htmlMin = require("gulp-htmlmin");
const cssNano = require("gulp-cssnano");
const uglify = require("gulp-uglify");

function minifyParts() {
  const partsFolder = "./src/views/parts";

  return src(`${partsFolder}/*.ejs`)
    .pipe(htmlMin())
    .pipe(dest(`${partsFolder}/`));
}

function minifyPages() {
  const viewsFolder = "./src/views";

  return src(`${viewsFolder}/*.ejs`)
    .pipe(htmlMin())
    .pipe(dest(`${viewsFolder}/`));
}

function minifyStyles() {
  const stylesFolder = "./public/styles";

  return src(`${stylesFolder}/*.css`)
    .pipe(cssNano())
    .pipe(dest(`${stylesFolder}/`));
}

function minifyScripts() {
  const scriptsFolder = "./public/scripts";

  return src(`${scriptsFolder}/*.js`)
    .pipe(uglify())
    .pipe(dest(`${scriptsFolder}/`));
}

exports.default = series(minifyParts, minifyPages, minifyStyles, minifyScripts);
