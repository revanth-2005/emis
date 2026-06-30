import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_WwGlqUYc.mjs';
import { manifest } from './manifest_Bb7Oe7gC.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/send-lead.astro.mjs');
const _page3 = () => import('./pages/blog/topcon-perc-hjt-polycrystalline-solar-panels-india.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/cookie-policy.astro.mjs');
const _page7 = () => import('./pages/get-a-quote.astro.mjs');
const _page8 = () => import('./pages/portfolio.astro.mjs');
const _page9 = () => import('./pages/privacy-policy.astro.mjs');
const _page10 = () => import('./pages/products.astro.mjs');
const _page11 = () => import('./pages/services/commercial.astro.mjs');
const _page12 = () => import('./pages/services/enterprise.astro.mjs');
const _page13 = () => import('./pages/services/residential.astro.mjs');
const _page14 = () => import('./pages/services.astro.mjs');
const _page15 = () => import('./pages/terms-of-service.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/send-lead.ts", _page2],
    ["src/pages/blog/topcon-perc-hjt-polycrystalline-solar-panels-india.astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/cookie-policy.astro", _page6],
    ["src/pages/get-a-quote.astro", _page7],
    ["src/pages/portfolio.astro", _page8],
    ["src/pages/privacy-policy.astro", _page9],
    ["src/pages/products.astro", _page10],
    ["src/pages/services/commercial.astro", _page11],
    ["src/pages/services/enterprise.astro", _page12],
    ["src/pages/services/residential.astro", _page13],
    ["src/pages/services/index.astro", _page14],
    ["src/pages/terms-of-service.astro", _page15],
    ["src/pages/index.astro", _page16]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "dd38a83d-4901-4e2b-9950-ec70c36b4571",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
