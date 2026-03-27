import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, J as createVNode, j as createBaseVNode, w as withCtx, dv as _imports_1, dw as _imports_3, a as createTextVNode, dx as _imports_0, dy as _imports_2 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Rejection Setup","description":"","frontmatter":{"title":"Rejection Setup","outline":"deep","prev":{"text":"Trend Setup","link":"/trading-with-pav/trend-setup"},"next":{"text":"Reversal trades","link":"/trading-with-pav/reversal-trades"}},"headers":[],"relativePath":"trading-with-pav/rejection-setup.md","filePath":"trading-with-pav/rejection-setup.md"}');
const _sfc_main = { name: "trading-with-pav/rejection-setup.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProtectedPage = resolveComponent("ProtectedPage");
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode('<h1 id="rejection-setup" tabindex="-1">Rejection Setup <a class="header-anchor" href="#rejection-setup" aria-label="Permalink to “Rejection Setup”">​</a></h1><p>This article is not your typical relationship rejection we are learning about markets rejection of higher or lower prices setup but with Volume Profile.</p><div class="info custom-block"><p class="custom-block-title">Table of Contents</p><nav class="table-of-contents"><ul><li><a href="#rejection-setup-definition">Rejection Setup Definition</a></li><li><a href="#rejection-of-higher-price">Rejection of Higher price</a><ul><li><a href="#short-trade-scenario">Short Trade Scenario</a></li></ul></li><li><a href="#rejection-of-lower-price">Rejection of Lower price</a><ul><li><a href="#long-trade-scenario">Long Trade Scenario</a></li></ul></li><li><a href="#comments">Comments</a></li></ul></nav></div><h2 id="rejection-setup-definition" tabindex="-1">Rejection Setup Definition <a class="header-anchor" href="#rejection-setup-definition" aria-label="Permalink to “Rejection Setup Definition”">​</a></h2><ul><li>This setup is based on finding a very strong rejection of either higher or lower prices and applying Flexible Volume Profile to it.</li><li>The key to trading this setup successfully is identifying the strong rejection in the chart.</li><li>Sometimes, the strong rejection looks like a strong pin-bar created at a swing point, but sometimes, it is not so clear, and there are other Rejection candles.</li><li>We donâ€™t care what candle pattern is bcoz, the candles changes with the time-frame.</li><li>What matters the most is that the rejection is strong and that the aggressiveness within it is evident.</li></ul><p>Basically SpotÂ <a href="/trading-with-pav/strong-rejection-of-higher-or-lower-prices">Rejection of Higher or Lower Prices</a>.</p><h2 id="rejection-of-higher-price" tabindex="-1">Rejection of Higher price <a class="header-anchor" href="#rejection-of-higher-price" aria-label="Permalink to “Rejection of Higher price”">​</a></h2><p><img src="' + _imports_0 + '" alt="Rejection-of-Higher-Price"></p><p>Rejection of Higher Price</p><ul><li>We look forÂ buying activity followed by sudden price reversal and a consequent strong selling activity.</li><li>When there is a strong price reversal, we get the information that one side of the market became very aggressive and strongly rejected some price level.</li><li>We are interested in the place where theÂ heaviest volumes within the rejectionÂ were added to the market</li><li><strong>Not good</strong>Â in majorÂ <strong>Uptrend</strong>.</li><li><strong>Best results</strong>Â inÂ <strong>Sideways</strong>Â andÂ <strong>Downtrend</strong>Â market.</li></ul><h3 id="short-trade-scenario" tabindex="-1">Short Trade Scenario <a class="header-anchor" href="#short-trade-scenario" aria-label="Permalink to “Short Trade Scenario”">​</a></h3>', 11)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("p", null, "Basically we look for Short Position when price comes back to POC of Higher price rejection as shown below.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_1,
            alt: "Rejection-of-Higher-Price-Short-Position"
          })
        ], -1),
        createBaseVNode("p", null, "Volume profile on Rejection of Higher Price", -1)
      ])]),
      _: 1
    }),
    _cache[3] || (_cache[3] = createStaticVNode('<h2 id="rejection-of-lower-price" tabindex="-1">Rejection of Lower price <a class="header-anchor" href="#rejection-of-lower-price" aria-label="Permalink to “Rejection of Lower price”">​</a></h2><p><img src="' + _imports_2 + '" alt="Rejection-of-Lower-Price"></p><p>Rejection of Lower Price</p><ul><li>We look forÂ selling activity followed by sudden price reversal and a consequent strong buying activity.</li><li>When there is a strong price reversal, we get the information that one side of the market became very aggressive and strongly rejected some price level.</li><li>We are interested in the place where theÂ heaviest volumes within the rejectionÂ were added to the market</li><li><strong>Not good</strong>Â in majorÂ <strong>Downtrend</strong>.</li><li><strong>Best results</strong>Â inÂ <strong>Sideways</strong>Â andÂ <strong>Uptrend</strong>Â market.</li></ul><h3 id="long-trade-scenario" tabindex="-1">Long Trade Scenario <a class="header-anchor" href="#long-trade-scenario" aria-label="Permalink to “Long Trade Scenario”">​</a></h3>', 5)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[1] || (_cache[1] = [
        createBaseVNode("p", null, "Basically we look for Long Position when price comes back to POC of Lower price rejection as shown below.", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: _imports_3,
            alt: "Rejection-of-Lower-Price-Long-Position"
          })
        ], -1),
        createBaseVNode("p", null, "Volume profile on Rejection of Lower Price (Only applied on Heavy volume)", -1),
        createBaseVNode("p", null, "In the above example because rejection angle was not sharp when price goes up we apply Volume Profile only to heaviest volume as shown in the image.", -1)
      ])]),
      _: 1
    }),
    _cache[4] || (_cache[4] = createBaseVNode("p", null, "Thatâ€™s all for this setup and remember this setup is my least favorite so do through back-test of this setup. Next is reversal trades.", -1)),
    _cache[5] || (_cache[5] = createBaseVNode("h2", {
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
const rejectionSetup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  rejectionSetup as default
};
