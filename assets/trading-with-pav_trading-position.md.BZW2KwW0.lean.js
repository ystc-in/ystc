import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, j as createBaseVNode, J as createVNode, a as createTextVNode, w as withCtx, eY as _imports_0, eZ as _imports_1, e_ as _imports_2, e$ as _imports_3 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Trading Position","description":"","frontmatter":{"title":"Trading Position","outline":"deep","prev":{"text":"TradingView – Right Bar","link":"/trading-with-pav/tradingview-right-bar"},"next":{"text":"PRICE","link":"/trading-with-pav/price"}},"headers":[],"relativePath":"trading-with-pav/trading-position.md","filePath":"trading-with-pav/trading-position.md"}');
const _sfc_main = { name: "trading-with-pav/trading-position.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("", 33)),
    _cache[1] || (_cache[1] = createBaseVNode("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/bxNsz17CqOg",
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
const tradingPosition = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  tradingPosition as default
};
