import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, J as createVNode, w as withCtx } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Procedures Manual","description":"","frontmatter":{"title":"Procedures Manual","outline":"deep","prev":{"text":"Trading Plan – Explanatory Notes","link":"/trading-with-pav/trading-plan-explanatory-notes"},"next":{"text":"Trading Plan Summary Details","link":"/trading-with-pav/trading-plan-summary-details"}},"headers":[],"relativePath":"trading-with-pav/procedures-manual.md","filePath":"trading-with-pav/procedures-manual.md"}');
const _sfc_main = { name: "trading-with-pav/procedures-manual.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("", 17)),
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_GraphComment)
      ]),
      _: 1
    })
  ]);
}
const proceduresManual = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  proceduresManual as default
};
