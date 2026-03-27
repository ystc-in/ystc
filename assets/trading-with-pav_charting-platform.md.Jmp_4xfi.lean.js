import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, j as createBaseVNode, J as createVNode, a as createTextVNode, w as withCtx, be as _imports_0, bf as _imports_1, bg as _imports_2, bh as _imports_3, bi as _imports_4, bj as _imports_5, bk as _imports_6, bl as _imports_7, bm as _imports_8, bn as _imports_9, bo as _imports_10, bp as _imports_11 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Charting Platform","description":"","frontmatter":{"title":"Charting Platform","outline":"deep","prev":{"text":"Chart Timeframes","link":"/trading-with-pav/chart-Timeframes"},"next":{"text":"TradingView â€“ Chart Area Basics & Settings","link":"/trading-with-pav/tradingview-chart-area-basics-settings"}},"headers":[],"relativePath":"trading-with-pav/charting-platform.md","filePath":"trading-with-pav/charting-platform.md"}');
const _sfc_main = { name: "trading-with-pav/charting-platform.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("", 49)),
    _cache[1] || (_cache[1] = createBaseVNode("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/NDXMC6_oUKw",
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
const chartingPlatform = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  chartingPlatform as default
};
