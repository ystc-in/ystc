import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, J as createVNode, w as withCtx } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Trading Plan Template","description":"","frontmatter":{"title":"Trading Plan Template","outline":"deep","prev":{"text":"Trading Plan","link":"/trading-with-pav/trading-plan"},"next":{"text":"Trading Plan – Explanatory Notes","link":"/trading-with-pav/trading-plan-explanatory-notes"}},"headers":[],"relativePath":"trading-with-pav/trading-plan-template.md","filePath":"trading-with-pav/trading-plan-template.md"}');
const _sfc_main = { name: "trading-with-pav/trading-plan-template.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("", 15)),
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_GraphComment)
      ]),
      _: 1
    })
  ]);
}
const tradingPlanTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  tradingPlanTemplate as default
};
