import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, J as createVNode, w as withCtx, eW as _imports_0, eX as _imports_1 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Trading Chart","description":"","frontmatter":{"title":"Trading Chart","outline":"deep","prev":{"text":"Market Timings","link":"/trading-with-pav/market-timings"},"next":{"text":"Anatomy of a Candlestick","link":"/trading-with-pav/anatomy-of-a-candlestick"}},"headers":[],"relativePath":"trading-with-pav/trading-chart.md","filePath":"trading-with-pav/trading-chart.md"}');
const _sfc_main = { name: "trading-with-pav/trading-chart.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("", 11)),
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_GraphComment)
      ]),
      _: 1
    })
  ]);
}
const tradingChart = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  tradingChart as default
};
