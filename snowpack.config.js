/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    'snowpack-plugin-less'
  ],
  routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
  alias: {
    "core": "./src/core",
    "pages": "./src/pages"
  },
  optimize: {
    minify: true,
    treeshake: true,
    bundle: true
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    secure: true,
  },
  buildOptions: {
    metaUrlPath: "vendor",
    sourcemap: true,
  },
};

