import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, J as createVNode, w as withCtx } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Trading Plan","description":"","frontmatter":{"title":"Trading Plan","outline":"deep","prev":{"text":"Trading Platform Setup","link":"/trading-with-pav/trading-platform-setup"},"next":{"text":"Trading Plan Template","link":"/trading-with-pav/trading-plan-template"}},"headers":[],"relativePath":"trading-with-pav/trading-plan.md","filePath":"trading-with-pav/trading-plan.md"}');
const _sfc_main = { name: "trading-with-pav/trading-plan.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("", 27)),
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_GraphComment)
      ]),
      _: 1
    })
  ]);
}
const tradingPlan = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  tradingPlan as default
};
