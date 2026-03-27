import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, j as createBaseVNode, J as createVNode, a as createTextVNode, w as withCtx, ej as _imports_0, ek as _imports_1, el as _imports_2, em as _imports_3, en as _imports_4, eo as _imports_5 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Supply and Demand","description":"","frontmatter":{"title":"Supply and Demand","outline":"deep","prev":{"text":"The Dual-Auction Process","link":"/trading-with-pav/the-dual-auction-process"},"next":{"text":"Collective Market Sentiment","link":"/trading-with-pav/collective-market-sentiment"}},"headers":[],"relativePath":"trading-with-pav/supply-and-demand.md","filePath":"trading-with-pav/supply-and-demand.md"}');
const _sfc_main = { name: "trading-with-pav/supply-and-demand.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode('<h1 id="supply-and-demand" tabindex="-1">Supply and Demand <a class="header-anchor" href="#supply-and-demand" aria-label="Permalink to “Supply and Demand”">​</a></h1><p>In this article we gonna learn about how market works from a supply and demand perspective. It’s a dual-auction process, with price auctioning both up and down depending on which force is dominant at the time – supply or demand.</p><p>Just remember this 4 Important Points on which the whole market runs.</p><ol><li><strong>Price rises</strong> while <strong>demand</strong> is <strong>greater than</strong> supply, <ul><li>and while those <strong>buyers</strong> are willing to <strong>pay higher prices</strong>.</li></ul></li><li><strong>Price rises</strong> until we <strong>run out</strong> of <strong>buyers</strong>, <ul><li>or until <strong>supply increases</strong> sufficiently to <strong>absorb all</strong> the <strong>demand</strong>.</li></ul></li><li><strong>Price falls</strong> while <strong>supply</strong> is <strong>greater than</strong> demand, <ul><li>and while those <strong>sellers</strong> are willing to <strong>sell at lower prices</strong>.</li></ul></li><li><strong>Price falls</strong> until we <strong>run out</strong> of <strong>sellers</strong>, <ul><li>or until <strong>demand increases</strong> to the point it <strong>absorbs all</strong> the <strong>supply</strong>.</li></ul></li></ol><p>Below image points the 1st point, the black arrow shows price rising which shows buyers are more willing to pay higher prices i.e. demand is greater than supply.</p><p><img src="' + _imports_0 + '" alt="Prices-Rises-1"></p><p>Below image points the 2nd point, the rectangle blocks shows price is unable to go up i.e. supply increases sufficiently to absorb all the demand which shows buyers are running out.</p><p><img src="' + _imports_1 + '" alt="Prices-Rises-2"></p><p>Below image points the 3rd point, the black arrow shows price falling which shows sellers are willing to sell at lower prices i.e. supply is greater than demand.</p><p><img src="' + _imports_2 + '" alt="Prices-Rises-3"></p><p>Below image points the 4th point, the rectangle blocks shows price is unable to go down i.e. demand increases to a point it absorb all the supply which shows sellers are running out.</p><p><img src="' + _imports_3 + '" alt="Prices-Rises-4"></p><p>If we use the 4 points from above mark them in chart in the context of Supply and Demand we see the chart shown in below image. The red color zone is Supply from where the price falls and green color is where price rises.</p><p><img src="' + _imports_4 + '" alt="Supply-and-Demand"></p><p>The following chart shows price falling from supply and rising from demand.</p><p><img src="' + _imports_5 + '" alt="Supply-and-Demand-in-Works"></p><p>That’s it for supply and demand in the context of Dual Auction. Will explore more on supply and demand zone in next Volume 2 : PRICE ACTION &amp; S/R also on Support and Resistance with how to find those areas.</p><p>In next article we gonna conclude this “<strong>Module 1 : INTRODUCTION</strong>” with Collective Market Sentiment.</p><h2 id="video" tabindex="-1">Video <a class="header-anchor" href="#video" aria-label="Permalink to “Video”">​</a></h2>', 19)),
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
