import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, J as createVNode, w as withCtx } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Market Timings","description":"","frontmatter":{"title":"Market Timings","outline":"deep","prev":{"text":"Market Segments","link":"/trading-with-pav/market-segments"},"next":{"text":"Trading Chart","link":"/trading-with-pav/trading-chart"}},"headers":[],"relativePath":"trading-with-pav/market-timings.md","filePath":"trading-with-pav/market-timings.md"}');
const _sfc_main = { name: "trading-with-pav/market-timings.md" };
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
const marketTimings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  marketTimings as default
};
