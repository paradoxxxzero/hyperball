export default {
  mount: {
    /* ... */
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    port: 37373,
  },
  buildOptions: {
    /* ... */
    out: 'docs',
  },
}
