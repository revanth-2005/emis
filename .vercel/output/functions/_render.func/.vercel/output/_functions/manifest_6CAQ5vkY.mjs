import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CxYz2iwI.mjs';
import 'es-module-lexer';
import { W as decodeKey } from './chunks/astro/server_-LkitC-W.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/topcon-perc-hjt-polycrystalline-solar-panels-india/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/topcon-perc-hjt-polycrystalline-solar-panels-india","isIndex":false,"type":"page","pattern":"^\\/blog\\/topcon-perc-hjt-polycrystalline-solar-panels-india\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"topcon-perc-hjt-polycrystalline-solar-panels-india","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/topcon-perc-hjt-polycrystalline-solar-panels-india.astro","pathname":"/blog/topcon-perc-hjt-polycrystalline-solar-panels-india","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"cookie-policy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cookie-policy","isIndex":false,"type":"page","pattern":"^\\/cookie-policy\\/?$","segments":[[{"content":"cookie-policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cookie-policy.astro","pathname":"/cookie-policy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"get-a-quote/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/get-a-quote","isIndex":false,"type":"page","pattern":"^\\/get-a-quote\\/?$","segments":[[{"content":"get-a-quote","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/get-a-quote.astro","pathname":"/get-a-quote","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"portfolio/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio","isIndex":false,"type":"page","pattern":"^\\/portfolio\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio.astro","pathname":"/portfolio","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"privacy-policy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy-policy","isIndex":false,"type":"page","pattern":"^\\/privacy-policy\\/?$","segments":[[{"content":"privacy-policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy-policy.astro","pathname":"/privacy-policy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"products/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/products","isIndex":false,"type":"page","pattern":"^\\/products\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/products.astro","pathname":"/products","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"services/commercial/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/commercial","isIndex":false,"type":"page","pattern":"^\\/services\\/commercial\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"commercial","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/commercial.astro","pathname":"/services/commercial","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"services/enterprise/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/enterprise","isIndex":false,"type":"page","pattern":"^\\/services\\/enterprise\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"enterprise","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/enterprise.astro","pathname":"/services/enterprise","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"services/residential/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/residential","isIndex":false,"type":"page","pattern":"^\\/services\\/residential\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"residential","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/residential.astro","pathname":"/services/residential","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":true,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/index.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"terms-of-service/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/terms-of-service","isIndex":false,"type":"page","pattern":"^\\/terms-of-service\\/?$","segments":[[{"content":"terms-of-service","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms-of-service.astro","pathname":"/terms-of-service","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-lead","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-lead\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-lead","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-lead.ts","pathname":"/api/send-lead","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://ermisglobal.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/src/pages/blog/topcon-perc-hjt-polycrystalline-solar-panels-india.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/src/pages/cookie-policy.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/src/pages/get-a-quote.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/src/pages/portfolio.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/src/pages/privacy-policy.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/src/pages/products.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/src/pages/services/commercial.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/src/pages/services/enterprise.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/src/pages/services/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/src/pages/services/residential.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/src/pages/terms-of-service.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/api/send-lead@_@ts":"pages/api/send-lead.astro.mjs","\u0000@astro-page:src/pages/blog/topcon-perc-hjt-polycrystalline-solar-panels-india@_@astro":"pages/blog/topcon-perc-hjt-polycrystalline-solar-panels-india.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/cookie-policy@_@astro":"pages/cookie-policy.astro.mjs","\u0000@astro-page:src/pages/get-a-quote@_@astro":"pages/get-a-quote.astro.mjs","\u0000@astro-page:src/pages/portfolio@_@astro":"pages/portfolio.astro.mjs","\u0000@astro-page:src/pages/privacy-policy@_@astro":"pages/privacy-policy.astro.mjs","\u0000@astro-page:src/pages/products@_@astro":"pages/products.astro.mjs","\u0000@astro-page:src/pages/services/commercial@_@astro":"pages/services/commercial.astro.mjs","\u0000@astro-page:src/pages/services/enterprise@_@astro":"pages/services/enterprise.astro.mjs","\u0000@astro-page:src/pages/services/residential@_@astro":"pages/services/residential.astro.mjs","\u0000@astro-page:src/pages/services/index@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/terms-of-service@_@astro":"pages/terms-of-service.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_6CAQ5vkY.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BjnFAAUu.js","/astro/hoisted.js?q=1":"_astro/hoisted.BFB53TpW.js","/astro/hoisted.js?q=2":"_astro/hoisted.Dm4eBXFl.js","/astro/hoisted.js?q=3":"_astro/hoisted.BCwloxzm.js","/astro/hoisted.js?q=4":"_astro/hoisted.Dmyt-33a.js","/astro/hoisted.js?q=5":"_astro/hoisted.tIYTkXoH.js","/astro/hoisted.js?q=6":"_astro/hoisted.BaRRQdEp.js","/astro/hoisted.js?q=7":"_astro/hoisted.CvPxYLXb.js","C:/Users/Admin/Downloads/ermisglobal-web/ermisglobal-web/src/components/TeamCard":"_astro/TeamCard.DCvNfjAR.js","@astrojs/react/client.js":"_astro/client.DrE9CFQR.js","/astro/hoisted.js?q=8":"_astro/hoisted.CyZJzBFH.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.D_mq4qyt.css","/diff_process.png","/diff_professionals.png","/diff_quality.png","/diff_service.png","/director_ramanadane.png","/director_ramkumar.png","/favicon.svg","/gallery_commercial.png","/gallery_industrial.png","/gallery_residential.png","/hero_blog.png","/hero_portfolio.png","/hero_products.png","/hero_solar_installation.png","/how_approve.jpg","/how_approve.png","/how_design.png","/how_installation.png","/how_saving.png","/og-default.jpg","/our_story_vision.png","/prod_central_inverter.png","/prod_dc_ac_cables.png","/prod_hybrid_inverter.png","/prod_lead_acid_battery.png","/prod_lifepo4_battery.png","/prod_microinverter.png","/prod_monitoring_system.png","/prod_mono_perc.png","/prod_mounting_structure.png","/prod_polycrystalline.png","/prod_string_inverter.png","/prod_surge_protection.png","/prod_topcon_bifacial.png","/robots.txt","/segment_hospitals.png","/segment_hotels.png","/segment_offices.png","/segment_retail.png","/segment_schools.png","/segment_warehouses.png","/service_commercial.png","/service_commercial_hero.png","/service_industrial.png","/service_industrial_hero.png","/service_residential.png","/service_residential_hero.png","/sitemap.xml","/solar-power-house-update.jpg","/fonts/Metropolis-400.woff2","/fonts/Metropolis-500.woff2","/fonts/Metropolis-600.woff2","/fonts/Metropolis-700.woff2","/fonts/Metropolis-800.woff2","/logos/logo-globe-red.svg","/logos/logo-globe-white.svg","/logos/logo-horizontal-color.svg","/logos/logo-horizontal-red.svg","/logos/logo-horizontal-white.svg","/logos/logo-icon-red.svg","/logos/logo-stacked-red.svg","/logos/logo-stacked-white.svg","/_astro/client.DrE9CFQR.js","/_astro/hoisted.BaRRQdEp.js","/_astro/hoisted.BCwloxzm.js","/_astro/hoisted.BFB53TpW.js","/_astro/hoisted.BjnFAAUu.js","/_astro/hoisted.CvPxYLXb.js","/_astro/hoisted.CyZJzBFH.js","/_astro/hoisted.Dm4eBXFl.js","/_astro/hoisted.Dmyt-33a.js","/_astro/hoisted.tIYTkXoH.js","/_astro/index.CVf8TyFT.js","/_astro/TeamCard.DCvNfjAR.js","/about/index.html","/blog/topcon-perc-hjt-polycrystalline-solar-panels-india/index.html","/blog/index.html","/contact/index.html","/cookie-policy/index.html","/get-a-quote/index.html","/portfolio/index.html","/privacy-policy/index.html","/products/index.html","/services/commercial/index.html","/services/enterprise/index.html","/services/residential/index.html","/services/index.html","/terms-of-service/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"5VntU9z7kurltECvKZF2WUYNOVZno8njlZG/Hm0+aFs=","experimentalEnvGetSecretEnabled":false});

export { manifest };
