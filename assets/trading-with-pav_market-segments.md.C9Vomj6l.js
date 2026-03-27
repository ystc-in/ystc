import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, j as createBaseVNode, J as createVNode, a as createTextVNode, w as withCtx } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Market Segments","description":"","frontmatter":{"title":"Market Segments","outline":"deep","prev":{"text":"Journey of a Share","link":"/trading-with-pav/journey-of-a-share"},"next":{"text":"Market Timings","link":"/trading-with-pav/market-timings"}},"headers":[],"relativePath":"trading-with-pav/market-segments.md","filePath":"trading-with-pav/market-segments.md"}');
const _sfc_main = { name: "trading-with-pav/market-segments.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="market-segments" tabindex="-1">Market Segments <a class="header-anchor" href="#market-segments" aria-label="Permalink to “Market Segments”">​</a></h1><p>There are total 6 market segments to choose from as below</p><ol><li>Equity</li><li>Equity Derivatives (Future and Options)</li><li>Currency Derivatives (Future and Options) country-wise</li><li>Commodities Derivatives (Future and Options)</li><li>Forex Market (FX World Currency Market)</li><li>Cryptocurrency (eg:- Bitcoin, Dogecoin etc.)</li></ol><p>From the above for India NSE offers the following 3 and MCX offers the Commodities</p><ol><li>Equity</li><li>Equity Derivatives (Future and Options)</li><li>Currency Derivatives (Future and Options) country-wise</li><li>Commodities Derivatives (Future and Options)</li></ol><p>For Forex and Cryptocurrency you have find unofficial ways.</p><h2 id="video" tabindex="-1">Video <a class="header-anchor" href="#video" aria-label="Permalink to “Video”">​</a></h2>', 7)),
    _cache[1] || (_cache[1] = createBaseVNode("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/7tfxXpLBWXM",
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
const marketSegments = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  marketSegments as default
};
