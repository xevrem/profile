import * as esbuild from "esbuild";
import { inlineSass } from "esbuild-inline-sass";

let ctx = await esbuild.context({
  bundle: true,
  entryPoints: ["./src/index.jsx"],
  logLevel: "debug",
  minify: false,
  outdir: "./public",
  plugins: [inlineSass()],
  sourcemap: true,
  target: ["es2015"],
});

await ctx.watch({});

let { host: _host, port: _port } = await ctx.serve({
  servedir: "./public",
});
