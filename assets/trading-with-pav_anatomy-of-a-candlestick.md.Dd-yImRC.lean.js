import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, j as createBaseVNode, J as createVNode, a as createTextVNode, w as withCtx, b4 as _imports_0, aO as _imports_1, b5 as _imports_2, b6 as _imports_3 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Anatomy of a Candlestick","description":"","frontmatter":{"title":"Anatomy of a Candlestick","outline":"deep","prev":{"text":"Trading Chart","link":"/trading-with-pav/trading-chart"},"next":{"text":"Chart Timeframes","link":"/trading-with-pav/chart-timeframes"}},"headers":[],"relativePath":"trading-with-pav/anatomy-of-a-candlestick.md","filePath":"trading-with-pav/anatomy-of-a-candlestick.md"}');
const _sfc_main = { name: "trading-with-pav/anatomy-of-a-candlestick.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("", 29)),
    _cache[1] || (_cache[1] = createBaseVNode("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/28clQh7CuBM",
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
const anatomyOfACandlestick = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  anatomyOfACandlestick as default
};
