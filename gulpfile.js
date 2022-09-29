const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
	return src("shinobi/**/*.scss")
		.pipe(sass())
		.pipe(purgecss({ content: ["./index.html"] }))
		.pipe(dest("css"));
}

function watchTask() {
	watch(["shinobi/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
