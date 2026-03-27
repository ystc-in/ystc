import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, j as createBaseVNode, J as createVNode, a as createTextVNode, w as withCtx, fb as _imports_0, fc as _imports_1, fd as _imports_2, fe as _imports_3, ff as _imports_4, fg as _imports_5 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"TradingView â€“ How to use Drawing Tools ?","description":"","frontmatter":{"title":"TradingView â€“ How to use Drawing Tools ?","outline":"deep","prev":{"text":"TradingView â€“ Chart Area Basics & Settings","link":"/trading-with-pav/tradingview-chart-area-basics-settings"},"next":{"text":"TradingView â€“ Indicators","link":"/trading-with-pav/tradingview-indicators"}},"headers":[],"relativePath":"trading-with-pav/tradingview-how-to-use-drawing-tools.md","filePath":"trading-with-pav/tradingview-how-to-use-drawing-tools.md"}');
const _sfc_main = { name: "trading-with-pav/tradingview-how-to-use-drawing-tools.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("", 44)),
    _cache[1] || (_cache[1] = createBaseVNode("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/VPzcOvxCBSQ",
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: ""
    }, null, -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "The above video explains this article in hindi language.", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("h2", {
      id: "comments",
      tabindex: "-1"
    }, [
      createTextVNode("Comments "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#comments",
        "aria-label": "Permalink to “Comments”"
      }, "​")
    ], -1)),
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_GraphComment)
      ]),
      _: 1
    })
  ]);
}
const tradingviewHowToUseDrawingTools = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  tradingviewHowToUseDrawingTools as default
};
