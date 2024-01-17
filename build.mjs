import * as esbuild from "esbuild";
import { inlineSass } from "esbuild-inline-sass";

let ctx = await esbuild.build({
  bundle: true,
  entryPoints: ["./src/index.jsx"],
  logLevel: "silent",
  minify: true,
  outdir: "./public",
  plugins: [inlineSass()],
  sourcemap: false,
  target: ["es2015"],
});
