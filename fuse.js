const { FuseBox, Sparky, BabelPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  output: "dist/$name.js",
  sourceMaps: true,
  cache: true,

  plugins: [
    BabelPlugin({
      config: {
        sourceMaps: true,
        presets: ["env", "babel-preset-stage-2"]
      }
    })
  ]
});

Sparky.task("dev-server", () => {
  fuse.dev({ port: 8080 });

  fuse.bundle("app")
    .instructions(" > ./js/index.js")
    .target("browser")
    .watch()
    .hmr({ reload: true });
})

Sparky.task("clean", () => {
  return Sparky.src("dist/").clean("dist/");
});

Sparky.task("watch:static", () => {
  return Sparky
    .watch(["./assets/**/*", "index.html"], { base: "./src" })
    .dest("./dist");
});

Sparky.task("default", ["clean", "watch:static", "dev-server"], () => fuse.run());
