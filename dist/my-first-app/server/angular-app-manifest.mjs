
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: "/",
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    "index.csr.html": {size: 435, hash: "5064dc448660868277e228d71c0e0928e88e8a385b6dbb615de2809ceb7cee51", text: () => import("./assets-chunks/index_csr_html.mjs").then(m => m.default)},
    "index.server.html": {size: 948, hash: "d7ecac7d000f14b43c616c7d2402d4a5d57d1a064cd6d7690f1603094fab6aee", text: () => import("./assets-chunks/index_server_html.mjs").then(m => m.default)},
    "index.html": {size: 21580, hash: "18063353bfc7f435341ba4da4b0dc6ce2036bcb963d7881e7da99fe0fcd3c8de", text: () => import("./assets-chunks/index_html.mjs").then(m => m.default)},
    "styles-5INURTSO.css": {size: 0, hash: "menYUTfbRu8", text: () => import("./assets-chunks/styles-5INURTSO_css.mjs").then(m => m.default)}
  },
};
