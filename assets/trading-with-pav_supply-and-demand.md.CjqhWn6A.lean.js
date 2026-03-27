import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, j as createBaseVNode, J as createVNode, a as createTextVNode, w as withCtx, ej as _imports_0, ek as _imports_1, el as _imports_2, em as _imports_3, en as _imports_4, eo as _imports_5 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Supply and Demand","description":"","frontmatter":{"title":"Supply and Demand","outline":"deep","prev":{"text":"The Dual-Auction Process","link":"/trading-with-pav/the-dual-auction-process"},"next":{"text":"Collective Market Sentiment","link":"/trading-with-pav/collective-market-sentiment"}},"headers":[],"relativePath":"trading-with-pav/supply-and-demand.md","filePath":"trading-with-pav/supply-and-demand.md"}');
const _sfc_main = { name: "trading-with-pav/supply-and-demand.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("", 19)),
    _cache[1] || (_cache[1] = createBaseVNode("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/aNIQAcMSytw",
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
const supplyAndDemand = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  supplyAndDemand as default
};
