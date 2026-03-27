import { _ as _export_sfc, I as resolveComponent, c as createElementBlock, o as openBlock, a5 as createStaticVNode, J as createVNode, j as createBaseVNode, w as withCtx, a as createTextVNode, dt as _imports_0, du as _imports_1 } from "./chunks/framework.BI_fuOps.js";
const __pageData = JSON.parse('{"title":"Rejection Candles","description":"","frontmatter":{"title":"Rejection Candles","outline":"deep","prev":{"text":"The Different Phases of Market","link":"/trading-with-pav/the-different-phases-of-market"},"next":{"text":"VPA – Building The Picture","link":"/trading-with-pav/vpa-building-the-picture"}},"headers":[],"relativePath":"trading-with-pav/rejection-candles.md","filePath":"trading-with-pav/rejection-candles.md"}');
const _sfc_main = { name: "trading-with-pav/rejection-candles.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProtectedPage = resolveComponent("ProtectedPage");
  const _component_GraphComment = resolveComponent("GraphComment");
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _cache[3] || (_cache[3] = createStaticVNode('<h1 id="rejection-candles" tabindex="-1">Rejection Candles <a class="header-anchor" href="#rejection-candles" aria-label="Permalink to “Rejection Candles”">​</a></h1><p>In this article we are going to learn about “Rejection Candles” with volume and what it revels.</p><div class="info custom-block"><p class="custom-block-title">Table of Contents</p><nav class="table-of-contents"><ul><li><a href="#rejection-candles-1">Rejection Candles</a></li><li><a href="#types-of-rejection-candles">Types of Rejection Candles</a><ul><li><a href="#long-lower-wick-shadow">Long Lower Wick/Shadow</a></li><li><a href="#doji-indecision">Doji (Indecision)</a></li><li><a href="#long-upper-wick-shadow">Long Upper Wick/Shadow</a></li></ul></li><li><a href="#key-takeaways-from-this-article">Key takeaways from this article</a></li><li><a href="#comments">Comments</a></li></ul></nav></div><h2 id="rejection-candles-1" tabindex="-1">Rejection Candles <a class="header-anchor" href="#rejection-candles-1" aria-label="Permalink to “Rejection Candles”">​</a></h2><p>There are many types of candle patterns but we are only interested in the candles which either reject price going up or down.</p><p>A rejection candles has long wick more longer than the body the better. Ideally out of 100% of the body 75% must be wick. (rare case according to individual back test wick can be 60%)</p><p><img src="' + _imports_0 + '" alt="Rejection-Candle"></p><p>Rejection Candle aka Pin Bar</p><h2 id="types-of-rejection-candles" tabindex="-1">Types of Rejection Candles <a class="header-anchor" href="#types-of-rejection-candles" aria-label="Permalink to “Types of Rejection Candles”">​</a></h2><p><img src="' + _imports_1 + '" alt="Types-of-Rejection-Candles"></p><p>As you can see in the above image there are 7 rejection candles.</p><h3 id="long-lower-wick-shadow" tabindex="-1"><strong>Long Lower Wick</strong>/Shadow <a class="header-anchor" href="#long-lower-wick-shadow" aria-label="Permalink to “Long Lower Wick/Shadow”">​</a></h3>', 12)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("p", null, "These candle have long lower wicks i.e. price opened and sellers took control and took it down but the low prices attracted buyers and they took control took price back up closed higher. These lower wicks represent bullishness.", -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("Candles which are "),
            createBaseVNode("strong", null, "Long Lower Wick"),
            createTextVNode("/Shadow are "),
            createBaseVNode("ol", null, [
              createBaseVNode("li", null, "Hammer (Bullish)"),
              createBaseVNode("li", null, "Hanging Man (Bearish)"),
              createBaseVNode("li", null, "Dragonfly Doji (Bullish)")
            ])
          ])
        ], -1)
      ])]),
      _: 1
    }),
    _cache[4] || (_cache[4] = createBaseVNode("h3", {
      id: "doji-indecision",
      tabindex: "-1"
    }, [
      createBaseVNode("strong", null, "Doji"),
      createTextVNode(" (Indecision) "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#doji-indecision",
        "aria-label": "Permalink to “Doji (Indecision)”"
      }, "​")
    ], -1)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[1] || (_cache[1] = [
        createBaseVNode("p", null, "When the open and close of a security are essentially equal to each other, a doji candle forms. The length of both upper and lower shadows may vary, causing the candlestick you are left with to either resemble a cross, an inverted cross, or a plus sign.", -1),
        createBaseVNode("p", null, "Doji candles show the playout of buyer-seller indecision in a tug-of-war of sorts. As price moves either above or below the opening level during the session, the close is either at or near the opening level.", -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("Candles which are "),
            createBaseVNode("strong", null, [
              createBaseVNode("strong", null, "Doji")
            ]),
            createTextVNode(" (Indecision) are "),
            createBaseVNode("ol", null, [
              createBaseVNode("li", null, "Doji (Indecision)"),
              createBaseVNode("li", null, [
                createTextVNode("Dragonfly Doji (Bullish – "),
                createBaseVNode("strong", null, "Long Lower Wick"),
                createTextVNode("/Shadow)")
              ]),
              createBaseVNode("li", null, [
                createTextVNode("Gravestone Doji (Bearish – "),
                createBaseVNode("strong", null, "Long Upper Wick"),
                createTextVNode("/Shadow)")
              ])
            ])
          ])
        ], -1)
      ])]),
      _: 1
    }),
    _cache[5] || (_cache[5] = createBaseVNode("h3", {
      id: "long-upper-wick-shadow",
      tabindex: "-1"
    }, [
      createTextVNode("Long Upper Wick/Shadow "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#long-upper-wick-shadow",
        "aria-label": "Permalink to “Long Upper Wick/Shadow”"
      }, "​")
    ], -1)),
    createVNode(_component_ProtectedPage, null, {
      default: withCtx(() => [..._cache[2] || (_cache[2] = [
        createBaseVNode("p", null, "These candle have long upper wicks i.e. price opened and buyers took control and took it up but the higher prices attracted sellers and they took control took price back down closed lower. These lower wicks represent bearishness.", -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createTextVNode("Candles which are "),
            createBaseVNode("strong", null, "Long Upper Wick"),
            createTextVNode("/Shadow are "),
            createBaseVNode("ol", null, [
              createBaseVNode("li", null, "Shooting Star (Bearish)"),
              createBaseVNode("li", null, "Inverted Hammer (Bullish)"),
              createBaseVNode("li", null, "Gravestone Doji (Bearish)")
            ])
          ])
        ], -1),
        createBaseVNode("p", null, "In next article will look at how to uses these rejection candles with volume and get a clearer picture.", -1)
      ])]),
      _: 1
    }),
    _cache[6] || (_cache[6] = createStaticVNode('<h2 id="key-takeaways-from-this-article" tabindex="-1">Key takeaways from this article <a class="header-anchor" href="#key-takeaways-from-this-article" aria-label="Permalink to “Key takeaways from this article”">​</a></h2><ul><li>You just have to remember only the 3 candles as below: <ol><li><strong>Long Lower Wick</strong>/Shadow</li><li><strong>Doji</strong> (Indecision)</li><li><strong>Long Upper Wick</strong>/Shadow</li></ol></li></ul><p>7 Rejection Candles to remember are as follows:</p><ul><li>Candles which are <strong>Long Upper Wick</strong>/Shadow are <ol><li>Shooting Star (Bearish)</li><li>Inverted Hammer (Bullish)</li><li>Gravestone Doji (Bearish)</li></ol></li><li>Candles which are <strong><strong>Doji</strong></strong> (Indecision) are <ol><li>Doji (Indecision)</li></ol></li><li>Candles which are <strong>Long Lower Wick</strong>/Shadow are <ol><li>Hammer (Bullish)</li><li>Hanging Man (Bearish)</li><li>Dragonfly Doji (Bullish)</li></ol></li></ul><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to “Comments”">​</a></h2>', 5)),
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_GraphComment)
      ]),
      _: 1
    })
  ]);
}
const rejectionCandles = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  rejectionCandles as default
};
