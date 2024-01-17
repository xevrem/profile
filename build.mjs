import * as esbuild from "esbuild";
import { inlineSass } from "esbuild-inline-sass";

await esbuild.build({
  bundle: true,
  entryPoints: ["./src/index.jsx"],
  logLevel: "silent",
  minify: true,
  outdir: "./public",
  plugins: [inlineSass()],
  sourcemap: false,
  target: ['chrome100', 'firefox100'],
});
