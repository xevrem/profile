const { src, dest, series } = require("gulp");
const del = require("del");

function clean() {
  return del(["dist"]);
}

function assets() {
  src("public/images/*").pipe(dest("dist/images"));
  src("public/favicon.svg").pipe(dest("dist"));
  return src("public/manifest.json").pipe(dest("dist"));
}

const setup = series(clean, assets);

exports.clean = clean;
exports.setup = setup;

exports.default = series(setup);
