import * as esbuild from "esbuild";
import { inlineSass } from "esbuild-inline-sass";

let ctx = await esbuild.context({
  bundle: true,
  entryPoints: ["./src/index.jsx"],
  logLevel: "verbose",
  minify: true,
  outdir: "./public",
  plugins: [inlineSass()],
  sourcemap: true,
  target: ["es2015"],
});

ctx.serve({
  servedir: "./public",
});
